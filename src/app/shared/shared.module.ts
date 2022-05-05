import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule,
  ],
  exports : [
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule
    ]
})
export class SharedModule { }
