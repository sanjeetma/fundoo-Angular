import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent implements OnInit {
resetForm: FormGroup;
message: string;
token: string;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resetForm = new FormGroup({
      password : new FormControl('', [ Validators.required]),
      confirmPassword : new FormControl('', [ Validators.required])
    });
    this.activatedRouter.paramMap.subscribe((params: ParamMap) => {
    this.token= params.get('token');
    console.log(this.token);
});
  }
onReset() {
  this.userService.resetPassword(this.resetForm.value, this.token).subscribe(
    (data: any) => {
      this.message = 'password change successfull';
      this.router.navigate(['/login']);
    },
    (error: any) => {
        this.message = ' password not matched ';
    });
}
}
