import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoContactActionComponent } from './step-two-contact-action.component';

describe('StepTwoContactActionComponent', () => {
  let component: StepTwoContactActionComponent;
  let fixture: ComponentFixture<StepTwoContactActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTwoContactActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoContactActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
