import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchievenotesComponent } from './archievenotes.component';

describe('ArchievenotesComponent', () => {
  let component: ArchievenotesComponent;
  let fixture: ComponentFixture<ArchievenotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchievenotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchievenotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
