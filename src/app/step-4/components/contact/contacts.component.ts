import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactsComponent {
  @Input()
  contactId: number;
  @Input()
  fullName: string;
  @Input()
  email: string;
  @Input()
  showSpinner: boolean;
  @Input()
  showButtonCall: boolean;
  @Output()
  callEvent: EventEmitter<IContact>;
  constructor() {
    this.callEvent = new EventEmitter<IContact>();
  }
  buttonCallHandler() {
    this.callEvent.emit({
      id: this.contactId,
      email: this.email,
      isShowButtonCall: !this.showButtonCall,
      isShowSpinner: !this.showSpinner,
      name: this.fullName
    });
  }
}
