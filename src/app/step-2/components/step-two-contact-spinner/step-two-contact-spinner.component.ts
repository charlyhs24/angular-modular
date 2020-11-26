import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-two-contact-spinner',
  templateUrl: './step-two-contact-spinner.component.html',
  styleUrls: ['./step-two-contact-spinner.component.scss']
})
export class StepTwoContactSpinnerComponent implements OnInit {
  @Input('isShowSpinner') isShowSpinner: boolean;
  constructor() { }

  ngOnInit() {
  }
}
