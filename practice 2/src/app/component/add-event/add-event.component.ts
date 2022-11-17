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
  eventForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    start: new FormControl(''),
    end: new FormControl(''),
  });

  submitted: boolean = false;
  reactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.reactiveForm = this.formBuilder.group({
      title: new FormControl(null, [Validators.required]),
      start: new FormControl(null, [Validators.required]),
      end: new FormControl(null, [Validators.required]),
    });
  }

  ngOnInit(): void {}

  addEvent(info: string): void {
    this.submitted = true;

    if (this.reactiveForm.valid) {
      console.log(info);
    } else {
      console.log('Error');
    }
  }

  get formControls() {
    return this.eventForm.controls;
  }
}
