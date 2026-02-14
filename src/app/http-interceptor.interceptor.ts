import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { PLATFORM_ID, TransferState, inject, makeStateKey } from '@angular/core';
import { of, tap } from 'rxjs';

export const httpInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const platformId = inject(PLATFORM_ID);
  const transferState = inject(TransferState);

  // Cache only GET requests
  if (req.method !== 'GET') {
    return next(req);
  }

  const key = makeStateKey<any>(req.urlWithParams);

  // ✅ Browser → Return cached response
  if (isPlatformBrowser(platformId)) {
    if (transferState.hasKey(key)) {
      const cached = transferState.get(key, null);
      transferState.remove(key);

      return of(
        new HttpResponse({
          body: cached,
          status: 200
        })
      );
    }
  }

  // ✅ Server → Store response
  return next(req).pipe(
    tap(event => {
      if (
        isPlatformServer(platformId) &&
        event instanceof HttpResponse
      ) {
        transferState.set(key, event.body);
      }
    })
  );
};
