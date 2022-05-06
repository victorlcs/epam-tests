import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { User } from '../models/user-model';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
  form:FormGroup;
  matchedUser$:Observable<User[]>;
  data:string;
  user:User ;

  constructor(private fb:FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      userName: new FormControl(null,[Validators.required]),
      userId: new FormControl({value:null,disabled:true})
    }
    )
  }

  ngOnInit(): void {
    this.form.get('userName')?.valueChanges.subscribe(value => {
      if(this.form.valid && value.length ===3){
        this.matchedUser$ = this.callApi(this.form.get('userName')?.value);
      }
    });

    this.callApi('').subscribe(
    {next: (data) => {
      this.data = JSON.stringify(data)
    },error: (error:HttpErrorResponse) =>{
      console.log(error.message);
      this.data = `${error.message}. \nPlease run command <npm run start:server>`
    }});

  }

  callApi(str:string):Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/user/' + str).pipe();
  }

  onOptionClick(id:string) {
    this.form.get('userId')?.setValue(id);
  }

  onKey(event:any){
    console.log(event);
  }

  onOptionSelected(event:MatAutocompleteSelectedEvent ){
    if(event.option.value) {
      //this.user = event.option.value;
      this.form.patchValue({userName:event.option.value.userName,userId:event.option.value.userId});
    }
  }
}
