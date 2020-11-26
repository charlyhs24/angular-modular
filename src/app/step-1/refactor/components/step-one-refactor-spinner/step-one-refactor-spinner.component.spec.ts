import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneRefactorSpinnerComponent } from './step-one-refactor-spinner.component';

describe('StepOneRefactorSpinnerComponent', () => {
  let component: StepOneRefactorSpinnerComponent;
  let fixture: ComponentFixture<StepOneRefactorSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOneRefactorSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneRefactorSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
