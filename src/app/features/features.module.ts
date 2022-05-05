import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DisplaySumComponent } from './display-sum/display-sum.component';

import { AutocompleteComponent } from './autocomplete/components/autocomplete.component';
import { TestQuestionsComponent } from './test-questions/test-questions.component';



@NgModule({
  declarations: [
    DisplaySumComponent,
    AutocompleteComponent,
    TestQuestionsComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DisplaySumComponent
  ]
})
export class FeaturesModule { }
