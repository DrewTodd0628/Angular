import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AddEventComponent implements OnInit {
  reactiveForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    start: new FormControl('', [Validators.required]),
    end: new FormControl('', [Validators.required]),
  });

  submitted: boolean = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {}

  addEvent(info: string): void {
    this.submitted = true;

    if (this.reactiveForm.valid) {
      console.log(info);
      console.log('valid: ');
      console.log(this.formControls.start.valid);
    } else {
      console.log('valid: ');
      console.log(this.formControls.start.valid);
    }
  }

  get formControls() {
    return this.reactiveForm.controls;
  }
}
