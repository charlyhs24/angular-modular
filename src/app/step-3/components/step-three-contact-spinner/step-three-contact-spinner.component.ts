import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-step-three-contact-spinner',
  templateUrl: './step-three-contact-spinner.component.html',
  styleUrls: ['./step-three-contact-spinner.component.scss']
})
export class StepThreeContactSpinnerComponent implements OnInit {
  @Input('isShowSpinner') isShowSpinner: boolean;
  constructor() { }

  ngOnInit() {
  }

}
