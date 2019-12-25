// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { LoginComponent } from './login.component';

// describe('LoginComponent', () => {
//   let component: LoginComponent;
//   let fixture: ComponentFixture<LoginComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ LoginComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(LoginComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });



import { HttpModule, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { DebugElement, inject } from '@angular/core';
import { MatCardModule, MatIconModule, MatToolbarModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { UserService } from 'src/app/services/user.service';
import { HttpTestingController } from '@angular/common/http/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('LoginComponent with user services', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let debugElement: DebugElement;
  let submitButton: DebugElement;
  let htmlElement: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        ReactiveFormsModule,
        FormsModule,
        RouterTestingModule,
        BrowserModule,
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        HttpClientTestingModule,
        // tslint:disable-next-line: deprecation
        HttpModule
      ],
      providers: [
        UserService,
        // tslint:disable-next-line: deprecation
        { provide: XHRBackend, useClass: MockBackend }
      ]

    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        debugElement = fixture.debugElement.query(By.css('form'));
        htmlElement = debugElement.nativeElement;
     //   submitButton = fixture.debugElement.query(By.css('button[type=submit]'));
      });
  }));

  // afterEach(() => {
  //   component.loginForm.reset();
  // });


  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  // it('check invalid form value', () => {
  //   component.loginForm.setValue({
  //     email: 'anything',
  //     password: 'anything'
  //   });
  //   expect(component.loginForm.valid).toEqual(false);
  //   // fixture.detectChanges();
  //   // expect(submitButton.nativeElement.disabled).toBe(true);
  // });

  it('check valid form value', () => {
    component.loginForm.setValue({
      email: 'mailtovineetpatel@gmail.com',
      password: 'vineet123'
    });
    expect(component.loginForm.valid).toEqual(true);
    // fixture.detectChanges();
    // expect(submitButton.nativeElement.disabled).toBe(false);
  });

  // it('should call onSubmit method', () => {
  //   spyOn(component, 'onSubmit');
  //   fixture.detectChanges();
  //   submitButton.triggerEventHandler('click', null);
  //   fixture.detectChanges();
  //   expect(component.onSubmit).toHaveBeenCalledTimes(1);
  // });





  //   fit('should route to dashboard', inject([UserService , HttpTestingController],(userService: UserService, httpMock: HttpTestingController) => {
  //     userService.loginUser(
  //       component.loginForm.setValue({
  //         userEmail: 'mailtovineetpatel@gmail.com',
  //         userPassword: 'vineet123'
  //       })
  //     ).subscribe(response => {
  //       expect(response).toBeTruthy();
  //     });

  //     const req = httpMock.expectOne('http://localhost:8080/user/login');
  //     expect(req.request.method).toEqual('POST');
  //     req.flush({ data: 'vineet' });

  //   }));

  //   afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
  //     httpMock.verify();
  //   }));
  // });
});
