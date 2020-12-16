import { StepThreeContactComponent } from './step-3/pages/step-three-contact/step-three-contact.component';
import { StepTwoContactComponent } from './step-2/pages/step-two-contact/step-two-contact.component';
import { RefactorStepOneComponent } from './step-1/refactor/pages/refactor-step-one/refactor-step-one.component';
import { ContactComponent } from './step-1/pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContactComponent } from './step-4/pages/page-contact/page-contact.component';

const routes: Routes = [
  {
    path: 'step-1',
    component: ContactComponent
  },
  {
    path: 'step-1-refactor',
    component: RefactorStepOneComponent
  },
  {
    path: 'step-2',
    component: StepTwoContactComponent
  },
  {
    path: 'step-3',
    loadChildren: () => import('./step-3/pages/step-three-contact/step-three-contact.module').then((module) => module.StepThreeContactModule)
  },
  {
    path: 'step-4',
    component: PageContactComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'step-4'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
