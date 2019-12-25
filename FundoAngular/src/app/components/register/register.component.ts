import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  hide = false;
  options: [
    { value: 'M', viewValue: 'M' },
    { value: 'F', viewValue: 'F' },
    { value: 'T', viewValue: 'T' },
  ]
  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }
patternPass = '[6-9]\\d{9}';
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required],
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      mobileNumber: ['', [ Validators.required, Validators.pattern(this.patternPass)]]});
    }
  onLogin() {
    if (this.registerForm.invalid) {
      console.log(this.registerForm);
      return;
        }
    this.userService.registerUser(this.registerForm.value)
         .subscribe (
                (data: any) => {
                    this.router.navigate(['/login']);
                },
                (error: any) => {
                    this.loading = false;
                });
    }
}
