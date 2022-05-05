import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DATA } from './data/questions-data';

@Component({
  selector: 'app-test-questions',
  templateUrl: './test-questions.component.html',
  styleUrls: ['./test-questions.component.scss']
})
export class TestQuestionsComponent implements OnInit {
  categoryArr=DATA;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClickButton(url:string) {
    this.router.navigateByUrl(`/${url}`);
  }
}
