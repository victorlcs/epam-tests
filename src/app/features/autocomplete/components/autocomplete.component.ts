import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  constructor(private fb:FormBuilder,private http: HttpClient) {
    this.form = this.fb.group({
      userName: new FormControl(null),
      userId: new FormControl({value:null,disabled:true})
    }
    )
  }

  ngOnInit(): void {
    this.form.get('userName')?.valueChanges.subscribe(value => {
      if(this.form.valid && this.form.get('userName')?.value.length ===3){
        this.matchedUser$ = this.callApi(this.form.get('userName')?.value);
      }
    })
    this.callApi('').subscribe(data => {
      this.data = JSON.stringify(data);
    })

  }

  callApi(str:string):Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/user/' + str).pipe();
  }

  onOptionClick(id:string) {
    this.form.get('userId')?.setValue(id);
  }

}
