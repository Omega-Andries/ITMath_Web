import { ITmathCalculations } from './../../../../Calculation UNIT/ITMathCalculations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  nGroupU:number;
  nGroupZ:number;
  nGroupUE:number;
  nGroupZE:number;

  nElementU:number;
  nElementZ:number;

  groupAnswerU:any;
  elementAnswerU:any;

  groupAnswerZ:any;
  elementAnswerZ:any;
  constructor() { }

  ngOnInit(): void {
  }

  elementOrder(gType:string){
    if(gType === "UN"){
      this.elementAnswerU = ITmathCalculations.subgroup(this.nGroupUE, this.nElementU,gType).length;
    }else{
      this.elementAnswerZ = ITmathCalculations.subgroup(this.nGroupZE, this.nElementZ,gType).length;
    }
    
  }

  groupOrder(gType:string){
    console.log(gType)
    if(gType ==="UN"){
     
      this.groupAnswerU = ITmathCalculations.group(this.nGroupU, gType).length;
      
    }else{
      console.log("i got "+this.nGroupZ)
      this.groupAnswerZ = ITmathCalculations.group(this.nGroupZ, gType).length;
      console.log("Answer " +this.groupAnswerU)
    }
    
  }
}
