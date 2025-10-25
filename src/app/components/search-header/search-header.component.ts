import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss'
})
export class SearchHeaderComponent implements OnDestroy{
  filter!: FormGroup;

  windowWidth:any;
  constructor(private fb: FormBuilder,
              private route:Router) {
    this.windowWidth=window.innerWidth;
    window.addEventListener('resize',this.resizeWidth, true);
    this.filter = this.fb.group({
      type: ['Job', Validators.required],
      term: ['', Validators.required],
      location:['']
    });
  }

  resizeWidth=():void=>{
    this.windowWidth=window.innerWidth;
  }
  selected(){
    if(this.filter.value.type == 'remote'){
      this.filter.controls['term'].setValue('remote');
    }
    else{
      this.filter.controls['term'].setValue('')
    }
  }
  applyFilter(){
    this.route.navigate(['jobsList'],{queryParams:{filter:this.filter.value.type,text:this.filter.value.term}})
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize',this.resizeWidth,true)
  }
}
