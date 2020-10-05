import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visuals',
  templateUrl: './visuals.component.html',
  styleUrls: ['./visuals.component.css']
})
export class VisualsComponent implements OnInit {

  monthlySpending: any;
  weeklySpending: any;
  spendingByCategory: any;

  constructor() { }

  ngOnInit() {
  }

}
