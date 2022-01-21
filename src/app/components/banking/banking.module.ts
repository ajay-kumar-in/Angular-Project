import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BankingRoutingModule } from './banking-routing.module';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { SharedModule } from 'src/app/shared/modules/shared.module';
import { DirectivePageComponent } from './directive-page/directive-page.component';
import { UpperCaseDirective } from 'src/app/shared/directives/upper-case.directive';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';


@NgModule({
  declarations: [
    BankDetailsComponent,
    DirectivePageComponent,
    UpperCaseDirective,
    HighlightDirective

  ],
  imports: [
    CommonModule,
    BankingRoutingModule,
    SharedModule
  ]
})
export class BankingModule { }
