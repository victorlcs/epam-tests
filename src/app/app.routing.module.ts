import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { AutocompleteComponent } from "./features/autocomplete/components/autocomplete.component";
import { DisplaySumComponent } from "./features/display-sum/display-sum.component";


const routes:Routes = [
    {path:'home', component:AppComponent},
    {path:'displaysum', component:DisplaySumComponent},
    {path:'autocomplete', component:AutocompleteComponent},
    {path:'', redirectTo:'autocomplete',pathMatch:'full'}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)]
})
export class AppRoutingModule {

}