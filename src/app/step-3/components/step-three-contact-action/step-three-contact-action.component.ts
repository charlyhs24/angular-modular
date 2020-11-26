import { WalletService } from './../../../services/wallet/wallet.service';
import { ContactService } from './../../../services/contact/contact.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Component({
  selector: 'app-step-three-contact-action',
  templateUrl: './step-three-contact-action.component.html',
  styleUrls: ['./step-three-contact-action.component.scss']
})
export class StepThreeContactActionComponent implements OnInit {
  @Input('contact') contact: IContact;
  @Output('messageEvent') messageEvent = new EventEmitter<boolean>();
  constructor(private contactService: ContactService, private wallet: WalletService) { }
  ngOnInit() {
    console.log("from component action");
    console.log(this.wallet.textServices);
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
