import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

export class User {
  pseudo: string | undefined ;
  firstName: string | undefined ;
  lastName: string | undefined ;
  email: string | undefined ;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  userForm: FormGroup = new FormGroup({});
  userData: User = new User();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm(): void {
    this.userForm = this.formBuilder.group({
      pseudo: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
  }

  saveUser() {
    this.userData = this.userForm.getRawValue();
  }

}
