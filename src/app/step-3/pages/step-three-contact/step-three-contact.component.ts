import { WalletService } from './../../../services/wallet/wallet.service';
import { ContactService } from './../../../services/contact/contact.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Component({
  selector: 'app-step-three-contact',
  templateUrl: './step-three-contact.component.html',
  styleUrls: ['./step-three-contact.component.scss']
})
export class StepThreeContactComponent implements OnInit {
  contact$: Observable<Array<IContact>>;
  constructor(private contactService: ContactService, private wallet: WalletService) { }
  ngOnInit() {
    console.log("from step 3");
    // this.wallet.textServices = 'hello from step three contact';
    console.log(this.wallet.textServices)
    this.contact$ = this.contactService.getContact();
  }
  CallHandler(message: boolean) {
    if (message) {
      this.contact$ = this.contactService.getContact();
    }
  }
}
