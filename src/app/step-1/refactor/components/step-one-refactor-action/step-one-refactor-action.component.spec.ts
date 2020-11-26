import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepOneRefactorActionComponent } from './step-one-refactor-action.component';

describe('StepOneRefactorActionComponent', () => {
  let component: StepOneRefactorActionComponent;
  let fixture: ComponentFixture<StepOneRefactorActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepOneRefactorActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepOneRefactorActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
