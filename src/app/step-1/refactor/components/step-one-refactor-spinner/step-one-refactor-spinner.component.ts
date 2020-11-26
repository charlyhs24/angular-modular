import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-one-refactor-spinner',
  templateUrl: './step-one-refactor-spinner.component.html',
  styleUrls: ['./step-one-refactor-spinner.component.scss']
})
export class StepOneRefactorSpinnerComponent implements OnInit {
  @Input('isShowSpinner') isShowSpinner: boolean;
  constructor() { }

  ngOnInit() {
  }

}
