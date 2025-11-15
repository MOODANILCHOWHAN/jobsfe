import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent {

  jobsForm:FormGroup;
  ;
  skills = [
    { _id: '1', name: 'JavaScript' },
    { _id: '2', name: 'Angular' },
    { _id: '3', name: 'Node.js' }
  ];

  constructor(private fb: FormBuilder) {
    this.jobsForm = this.fb.group({
      title: [''],
      company: [''],
      jobType: [''],
      industry: [''],
      city: [''],
      address: [''],
      experience: [''],
      interviewType: [''],
      skills: [[]],
      description: [''],
      applicationLink: ['']
    });
  
}
}
