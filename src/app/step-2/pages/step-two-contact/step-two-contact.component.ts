import { WalletService } from './../../../services/wallet/wallet.service';
import { ContactService } from './../../../services/contact/contact.service';
import { IContact } from './../../../step-1/pages/contact/contact.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-step-two-contact',
  templateUrl: './step-two-contact.component.html',
  styleUrls: ['./step-two-contact.component.scss']
})
export class StepTwoContactComponent implements OnInit {
  contact$: Observable<Array<IContact>>;
  constructor(private contactService: ContactService, private wallet: WalletService) {

  }
  ngOnInit() {
    this.wallet.textServices = "hello from step two contact";
    console.log("constructor step two contact");
    console.log(this.wallet.textServices)
    this.contact$ = this.contactService.getContact();
  }
  CallHandler(message: boolean) {
    if (message) {
      this.contact$ = this.contactService.getContact();
    }
  }

}
