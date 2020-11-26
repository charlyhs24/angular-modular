import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AppRoutingModule } from './../../../app-routing.module';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { StepTwoContactSpinnerComponent } from './../../components/step-two-contact-spinner/step-two-contact-spinner.component';
import { StepTwoContactActionComponent } from './../../components/step-two-contact-action/step-two-contact-action.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { WalletService } from './../../../services/wallet/wallet.service';
import { StepTwoContactComponent } from './step-two-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [StepTwoContactComponent, StepTwoContactActionComponent, StepTwoContactSpinnerComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    AppRoutingModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  exports: [StepTwoContactComponent]
})
export class StepTwoContactModule { }
