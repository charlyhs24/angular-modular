import { ContactService } from './../../../services/contact/contact.service';
import { IContact } from './../../../step-1/pages/contact/contact.component';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step-two-contact-action',
  templateUrl: './step-two-contact-action.component.html',
  styleUrls: ['./step-two-contact-action.component.scss']
})
export class StepTwoContactActionComponent implements OnInit {
  @Input('contact') contact: IContact;
  @Output('messageEvent') messageEvent = new EventEmitter<boolean>();
  constructor(private contactService: ContactService) { }
  ngOnInit() {
  }
  CallHandler() {
    let newContact: IContact = this.contact;
    newContact.isShowSpinner = !this.contact.isShowSpinner;
    newContact.isShowButtonCall = !this.contact.isShowButtonCall;
    this.contactService.updateContact(this.contact.id, newContact).subscribe(() => {
      this.messageEvent.emit(true);
    });
  }
}
