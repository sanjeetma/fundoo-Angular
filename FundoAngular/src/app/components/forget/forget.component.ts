import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  forgetForm: FormGroup;
  loading = false;
  message: string;
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackbar:MatSnackBar
  ) { }

  ngOnInit() {
    this.forgetForm = new FormGroup({
      email :new FormControl('', [ Validators.required])
    });
  }
  onForget(){
this.userService.forgetPassword(this.forgetForm.value)
.subscribe(
  (data:any) => {      
   this.message="token send to your email";
   this.snackbar.open("Reset password link sent",'',{duration:3000})
   this.router.navigate(['/login']);
  },
  (error:any) => {
      this.message="invalid email id";
  });
}
  }

