import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySumComponent } from './display-sum.component';

describe('DisplaySumComponent', () => {
  let component: DisplaySumComponent;
  let fixture: ComponentFixture<DisplaySumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
