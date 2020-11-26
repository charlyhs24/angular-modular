import { StepTwoContactModule } from './step-2/pages/step-two-contact/step-two-contact.module';
import { WalletService } from './services/wallet/wallet.service';
import { StepThreeContactModule } from './step-3/pages/step-three-contact/step-three-contact.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './step-1/pages/contact/contact.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { RefactorStepOneComponent } from './step-1/refactor/pages/refactor-step-one/refactor-step-one.component';
import { StepOneRefactorActionComponent } from './step-1/refactor/components/step-one-refactor-action/step-one-refactor-action.component';
import { StepOneRefactorSpinnerComponent } from './step-1/refactor/components/step-one-refactor-spinner/step-one-refactor-spinner.component';
import { StepTwoContactComponent } from './step-2/pages/step-two-contact/step-two-contact.component';
import { StepTwoContactSpinnerComponent } from './step-2/components/step-two-contact-spinner/step-two-contact-spinner.component';
import { StepTwoContactActionComponent } from './step-2/components/step-two-contact-action/step-two-contact-action.component';
import { StepThreeContactComponent } from './step-3/pages/step-three-contact/step-three-contact.component';
// import { StepThreeContactActionComponent } from './step-3/components/step-three-contact-action/step-three-contact-action.component';
// import { StepThreeContactSpinnerComponent } from './step-3/components/step-three-contact-spinner/step-three-contact-spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    RefactorStepOneComponent,
    StepOneRefactorActionComponent,
    StepOneRefactorSpinnerComponent,
    // StepTwoContactComponent,
    // StepTwoContactSpinnerComponent,
    // StepTwoContactActionComponent,
    // StepThreeContactComponent,
    // StepThreeContactActionComponent,
    // StepThreeContactSpinnerComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    HttpClientModule,
    StepTwoContactModule,
    // StepThreeContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
