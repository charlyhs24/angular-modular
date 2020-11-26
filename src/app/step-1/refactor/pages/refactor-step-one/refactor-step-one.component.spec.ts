import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefactorStepOneComponent } from './refactor-step-one.component';

describe('RefactorStepOneComponent', () => {
  let component: RefactorStepOneComponent;
  let fixture: ComponentFixture<RefactorStepOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefactorStepOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefactorStepOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
