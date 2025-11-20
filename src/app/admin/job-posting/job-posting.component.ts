import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AdminService } from '../admin.service';
import { retry } from 'rxjs';

@Component({
  selector: 'app-job-posting',
  templateUrl: './job-posting.component.html',
  styleUrl: './job-posting.component.scss'
})
export class JobPostingComponent {

  jobsForm: FormGroup;
  ;
  skills = [
    'JavaScript',
    'Angular',
    'Node.js'
  ];

  imageSelected: File | null = null;
  constructor(private fb: FormBuilder,
    private adminService: AdminService) {
    this.jobsForm = this.fb.group({
      jobName: ['', [Validators.required]],
      company: ['', [Validators.required]],
      jobType: ['', [Validators.required]],
      industryType: ['', [Validators.required]],
      city: ['', [Validators.required]],
      location: ['', [Validators.required]],
      jobExperience: ['', [Validators.required]],
      interviewType: ['', [Validators.required]],
      skils: [[], [Validators.required]],
      description: ['', [Validators.required]],
      link: ['', [Validators.required]],
      image: null
    });

  }


  onImageSelect(event: any): void {
    this.imageSelected = event.target.files[0];
    console.log(event, this.imageSelected)
  }
  addJob() {
    const formData = new FormData();
    formData.append('jobName', this.jobsForm.value.jobName)
    formData.append('company', this.jobsForm.value.company)
    formData.append('jobType', this.jobsForm.value.jobType)
    formData.append('industryType', this.jobsForm.value.industryType)
    formData.append('city', this.jobsForm.value.city)
    formData.append('location', this.jobsForm.value.location)
    formData.append('jobExperience', this.jobsForm.value.jobExperience)
    formData.append('interviewType', this.jobsForm.value.interviewType)
    formData.append('skils', JSON.stringify(this.jobsForm.value.skils))


    formData.append('description', this.jobsForm.value.description)
    formData.append('link', this.jobsForm.value.link)
    console.log(this.jobsForm.value.skils)
    console.log(this.imageSelected)
    if (this.imageSelected) {
      formData.append('image', this.imageSelected, this.imageSelected.name)
    }

    this.adminService.addJobs(formData).subscribe({
      next: (res) => {
        console.log(res)
      }, error: (err) => {
        console.log(err);

      }
    })
  }
}
