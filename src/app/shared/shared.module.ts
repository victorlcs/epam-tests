import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports : [
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatTabsModule,
    MatCardModule,
    MatButtonModule
    ]
})
export class SharedModule { }
