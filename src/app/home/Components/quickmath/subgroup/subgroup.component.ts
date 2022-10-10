import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {
  groupUN:number;
  groupUNElement:number;

  groupZN:number;
  groupZNElement:number;

  groupUNAnswer:string;
  groupZNAnswer:string;

  groupInfo;

  constructor() { }

  ngOnInit(): void {
  }

  generateSubgroup(gType:string){
    if(gType == "UN"){
      this.groupUNAnswer = ITmathCalculations.subgroup(this.groupUN, this.groupUNElement, gType);
      if(this.groupUNAnswer != "The entry you have entered is not part of the group"){
        this.groupInfo = ITmathCalculations.subGroupInfo(this.groupUN, this.groupUNElement, gType);
      }
      
    }else{
      this.groupZNAnswer = ITmathCalculations.subgroup(this.groupZN, this.groupZNElement, gType);
      if(this.groupZNAnswer != "The entry you have entered is not part of the group"){
        this.groupInfo = ITmathCalculations.subGroupInfo(this.groupZN, this.groupZNElement, gType);
      }
      
    }
  }

}
