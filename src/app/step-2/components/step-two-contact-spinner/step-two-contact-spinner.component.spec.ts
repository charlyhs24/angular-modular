import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoContactSpinnerComponent } from './step-two-contact-spinner.component';

describe('StepTwoContactSpinnerComponent', () => {
  let component: StepTwoContactSpinnerComponent;
  let fixture: ComponentFixture<StepTwoContactSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoContactSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContactSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
