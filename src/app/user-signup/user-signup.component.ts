import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
// import { User } from '../user';
import { Router } from '@angular/router';
import { SignupService } from '../signup.service';
// import { log } from 'console';
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  //  signUp!:any|undefined
  signupForm!: FormGroup;
  showPassword = false;

  constructor(
    public form: FormBuilder,
    private _route: Router,
    private SignUpService: SignupService
  ) {}

  ngOnInit() {
    this.signupForm = this.form.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
    this.signupForm.get('password')?.valueChanges.subscribe((value) => {
      console.log('Passwordvalue===>', value);
    });
    this.signupForm.get('confirmPassword')?.valueChanges.subscribe((value) => {
      console.log('confirmPasswordValue===>', value);
    });

    console.log(this.signupForm);

    // this.signUp();
  }

  // signUp(){
  //   this.SignUpService.signUp().subscribe((res)=>{
  //     console.log('res =======> ',res)
  //     this.signUp = res;
  //     console.log('claim======',this.signUp)
  //   },
  //    (err)=>{
  //     console.log('err =======> ',err)
  //    } )
  //   }
  onSubmit() {
    if (
      this.signupForm.value.password === this.signupForm.value.confirmPassword
    ) {
      console.log(this.signupForm.value);
    } else {
      console.log('errror');
    }

    // onLogout(){
    //   localStorage.clear();
    // }
  }
}
