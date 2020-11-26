import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeContactComponent } from './step-three-contact.component';

describe('StepThreeContactComponent', () => {
  let component: StepThreeContactComponent;
  let fixture: ComponentFixture<StepThreeContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepThreeContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
