import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from 'src/app/step-1/pages/contact/contact.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  API_URL: string = environment.API_URL;
  constructor(private http: HttpClient) {
    console.log("check API url");
    console.log(this.API_URL);
  }
  getContact<T>(): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/users`);
  }
  updateContact<T>(contacId: number, contact: IContact): Observable<T> {
    return this.http.put<T>(`${this.API_URL}/users/${contacId}`, contact);
  }
}
