import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
  textServices: string = 'hello from wallet';
  constructor() {
    console.log("constructor from wallet service called")
    // setTimeout(() => {
    //   this.textServices = 'hello world';
    // }, 10000);
  }
}
