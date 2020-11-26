import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeContactActionComponent } from './step-three-contact-action.component';

describe('StepThreeContactActionComponent', () => {
  let component: StepThreeContactActionComponent;
  let fixture: ComponentFixture<StepThreeContactActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreeContactActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContactActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
