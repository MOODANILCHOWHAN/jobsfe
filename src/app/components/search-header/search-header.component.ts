import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-header',
  templateUrl: './search-header.component.html',
  styleUrl: './search-header.component.scss'
})
export class SearchHeaderComponent {
  filter!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.filter = this.fb.group({
      type: ['', Validators.required],
      term: ['', Validators.required]
    });
  }
  applyFilter(){
    
  }
}
