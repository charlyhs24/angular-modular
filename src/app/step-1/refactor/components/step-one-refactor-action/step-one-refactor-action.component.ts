import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Component({
  selector: 'app-step-one-refactor-action',
  templateUrl: './step-one-refactor-action.component.html',
  styleUrls: ['./step-one-refactor-action.component.scss']
})
export class StepOneRefactorActionComponent implements OnInit {
  @Input('contact') contact: IContact;
  @Output('messageEvent') messageEvent = new EventEmitter<boolean>();
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  CallHandler() {
    let newContact: IContact = this.contact;
    newContact.isShowSpinner = !this.contact.isShowSpinner;
    newContact.isShowButtonCall = !this.contact.isShowButtonCall;
    this.http.put(`http://localhost:3000/users/${this.contact.id}`, newContact).subscribe(() => {
    });
    this.messageEvent.emit();
  }

}
