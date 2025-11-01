import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss'
})
export class JobCardComponent {

  @Input() job:any
  @Input() showBtns:any;
}
