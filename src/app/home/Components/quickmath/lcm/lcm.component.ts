import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lcm',
  templateUrl: './lcm.component.html',
  styleUrls: ['./lcm.component.scss']
})
export class LcmComponent implements OnInit {

  n:number;
  constructor() { }

  ngOnInit(): void {
  }

  lcmCompute(a,b){
    this.n = ITmathCalculations.lcm(Number.parseInt(a), Number.parseInt(b))
  }
}
