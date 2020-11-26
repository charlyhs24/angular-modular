import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeContactSpinnerComponent } from './step-three-contact-spinner.component';

describe('StepThreeContactSpinnerComponent', () => {
  let component: StepThreeContactSpinnerComponent;
  let fixture: ComponentFixture<StepThreeContactSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreeContactSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContactSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
