import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoContactComponent } from './step-two-contact.component';

describe('StepTwoContactComponent', () => {
  let component: StepTwoContactComponent;
  let fixture: ComponentFixture<StepTwoContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
