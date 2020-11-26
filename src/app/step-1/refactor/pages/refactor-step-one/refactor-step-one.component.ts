import { IContact } from './../../../pages/contact/contact.component';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-refactor-step-one',
  templateUrl: './refactor-step-one.component.html',
  styleUrls: ['./refactor-step-one.component.scss']
})
export class RefactorStepOneComponent implements OnInit {
  contact$: Observable<Array<IContact>>;
  constructor(private http: HttpClient) { }
  ngOnInit() {
    this.contact$ = this.http.get<Array<IContact>>('http://localhost:3000/users');
  }
  CallHandler(message: boolean) {
    console.log("call handler clicked")
    if (message) {
      this.contact$ = this.http.get<Array<IContact>>('http://localhost:3000/users');
    }
  }
}
