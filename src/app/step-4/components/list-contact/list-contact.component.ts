import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactService } from 'src/app/services/contact/contact.service';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.scss']
})
export class ListContactComponent implements OnInit {
  contact$: Observable<IContact>;
  constructor(private contact: ContactService) { }
  ngOnInit() {
    this.contact$ = this.contact.getContact();
  }
  callUserHandler(user: IContact) {
    this.contact.updateContact(user.id, user).subscribe(() => {
      this.contact$ = this.contact.getContact();
    })
  }
}
