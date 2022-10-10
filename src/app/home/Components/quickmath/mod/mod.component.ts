import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.scss']
})
export class ModComponent implements OnInit {
  n:number;
  constructor() { }

  ngOnInit(): void {
  }

  modCompute(a,b){
    this.n = ITmathCalculations.mod(Number.parseInt(a),Number.parseInt(b));
  }
}
function checkInp()
{
  var x=document.forms["myForm"]["age"].value;
  if (isNaN(x)) 
  {
    alert("Must input numbers");
    return false;
  }
}
