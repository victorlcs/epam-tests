import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-display-sum',
  templateUrl: './display-sum.component.html',
  styleUrls: ['./display-sum.component.scss']
})
export class DisplaySumComponent implements OnInit {
  forms:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.forms = this.fb.group({
      textBox1: new FormControl(null,[Validators.required]),
      textBox2: new FormControl(null,[Validators.required]),
      label: new FormControl({value:null,disabled:true},{})
    });
  }

  ngOnInit(): void {
    this.forms.valueChanges.subscribe(x => {
      if(this.forms.valid && x.textBox1 && x.textBox2) {
        let sum = x.textBox1 + x.textBox2;
        this.forms.get('label')?.setValue(sum);
      }
    })
  }

}
