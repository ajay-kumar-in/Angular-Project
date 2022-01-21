import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { DirectivePageComponent } from './directive-page/directive-page.component';

const routes: Routes = [
  {
    path: 'bankDetails',
    component: BankDetailsComponent
  },
  {
    path: 'directivePage',
    component: DirectivePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankingRoutingModule { }
