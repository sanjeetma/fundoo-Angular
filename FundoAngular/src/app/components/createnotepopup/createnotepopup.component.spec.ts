import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenotepopupComponent } from './createnotepopup.component';

describe('CreatenotepopupComponent', () => {
  let component: CreatenotepopupComponent;
  let fixture: ComponentFixture<CreatenotepopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatenotepopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenotepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
