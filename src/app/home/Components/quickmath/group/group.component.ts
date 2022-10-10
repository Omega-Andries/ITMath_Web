import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  groupZNElements:string 
  groupZN:number

  groupUNElements:string
  groupUN:number

  groupInfo:string;

  constructor() { }

  ngOnInit(): void {
  }

  generateGroup(gType:string){
    if(gType == "UN"){
      this.groupUNElements = ITmathCalculations.group(this.groupUN, gType)
      this.groupInfo = ITmathCalculations.groupInfo(this.groupUN,gType)
    }else{
      this.groupZNElements = ITmathCalculations.group(this.groupZN, gType)
      this.groupInfo = ITmathCalculations.groupInfo(this.groupZN,gType)
    }
  }

}
