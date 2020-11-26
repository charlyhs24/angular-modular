import { WalletService } from './../../../services/wallet/wallet.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StepThreeContactSpinnerComponent } from './../../components/step-three-contact-spinner/step-three-contact-spinner.component';
import { StepThreeContactActionComponent } from './../../components/step-three-contact-action/step-three-contact-action.component';
import { StepThreeContactComponent } from './step-three-contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepThreeContactRoutingModule } from './step-three-contact-routing.module';

@NgModule({
  declarations: [
    StepThreeContactComponent,
    StepThreeContactActionComponent,
    StepThreeContactSpinnerComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    StepThreeContactRoutingModule
  ],
  providers: [],
  exports: [
    StepThreeContactComponent,
    StepThreeContactActionComponent,
    StepThreeContactSpinnerComponent,
    StepThreeContactRoutingModule
  ]
})
export class StepThreeContactModule { }
