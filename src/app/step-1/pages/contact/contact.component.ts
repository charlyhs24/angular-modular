import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
export interface IContact {
  id: number;
  name: string;
  email: string;
  isShowSpinner: boolean;
  isShowButtonCall: boolean;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contact$: Observable<Array<IContact>>;
  constructor(private http: HttpClient) { }
  CallHandler(contact: IContact) {
    let newContact: IContact = contact;
    newContact.isShowSpinner = !contact.isShowSpinner;
    newContact.isShowButtonCall = !contact.isShowButtonCall;
    this.http.put(`http://localhost:3000/users/${contact.id}`, newContact).subscribe(() => {
      this.contact$ = this.http.get<Array<IContact>>('http://localhost:3000/users');
    });
  }
  ngOnInit() {
    this.contact$ = this.http.get<Array<IContact>>('http://localhost:3000/users');
  }

}
