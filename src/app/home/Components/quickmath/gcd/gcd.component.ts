import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcd',
  templateUrl: './gcd.component.html',
  styleUrls: ['./gcd.component.scss']
})
export class GcdComponent implements OnInit {
  n:number;
  constructor() { }

  ngOnInit(): void {
  }
  gcdCompute(a,b){
    this.n = ITmathCalculations.gcd(Number.parseInt(a),Number.parseInt(b))
  }
}
