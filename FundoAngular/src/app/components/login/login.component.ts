import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }
  ngOnInit() {
    this.loginForm = new FormGroup({
      email : new FormControl('', [ Validators.required, Validators.email]),
      password : new FormControl('', [ Validators.required])
    });
  }
  onSubmit(form: NgForm) {
    console.log(form);
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.userService.loginUser(this.loginForm.value)
      .subscribe(
        (data: any) => {
          localStorage.setItem('token', data.msg);
          console.log(localStorage.getItem('token'));
          this.snackbar.open('user login', 'Ok', {duration: 3000});
          this.router.navigate(['/dashboard']);
        },
        error => {
          this.snackbar.open(error.error.description, 'error', {duration: 3000});
          this.loading = false;
        });
  }
}

