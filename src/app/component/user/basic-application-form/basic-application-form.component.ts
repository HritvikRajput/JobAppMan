import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-application-form',
  templateUrl: './basic-application-form.component.html',
  styleUrls: ['./basic-application-form.component.scss']
})
export class BasicApplicationFormComponent {
  appForm = new FormGroup({
    basicDetails: new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      address: new FormControl(),
      gender: new FormControl(),
      contact: new FormControl(),
    }),
    educationDetails: new FormGroup({
      ssc: new FormGroup({
        board: new FormControl(),
        year: new FormControl(),
        cgpa: new FormControl()
      }),
      hsc: new FormGroup({
        board: new FormControl(),
        year: new FormControl(),
        cgpa: new FormControl()
      }),
      graduate: new FormGroup({
        board: new FormControl(),
        year: new FormControl(),
        cgpa: new FormControl()
      }),
      master: new FormGroup({
        board: new FormControl(),
        year: new FormControl(),
        cgpa: new FormControl()
      }),
    }),
    // workExperience: new FormArray({
    // company: new FormControl(),
    // desegnation: new FormControl(),

    // }),
    knownLanguages: new FormGroup({
      english: new FormGroup({
        read: new FormControl(false),
        write: new FormControl(false),
        speak: new FormControl(false),
      }),
      hindi: new FormGroup({
        read: new FormControl(false),
        write: new FormControl(false),
        speak: new FormControl(false),
      }),
      gujarati: new FormGroup({
        read: new FormControl(false),
        write: new FormControl(false),
        speak: new FormControl(false),
      }),
    }),
    // technicalExperience: new FormArray({
    //   technology: new FormControl(),
    //   level: new FormControl()// beeginner, mediator,expert
    // }),
    preference: new FormGroup({
      preferredLocation: new FormControl(),
      expectedCTC: new FormControl(),
      currentCTC: new FormControl(),
      noticePeriod: new FormControl(),
    })
  });
  constructor(private fb: FormBuilder) {

  }
  applyForJob() {
    console.log(this.appForm.value);

  }
}
