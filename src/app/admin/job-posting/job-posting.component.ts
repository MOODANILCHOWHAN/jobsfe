import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent {

  jobsForm:FormGroup<any> | undefined;

  constructor(private fb:FormBuilder){
   this.jobsForm= this.fb.group({

    })
  }
}
