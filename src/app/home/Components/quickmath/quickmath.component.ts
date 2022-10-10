import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quickmath',
  templateUrl: './quickmath.component.html',
  styleUrls: ['./quickmath.component.scss']
})
export class QuickmathComponent implements OnInit {

  lcm:boolean = false;
  gcd:boolean = false;
  mod:boolean = false;
  group:boolean = false;
  subgroup:boolean = false;
  order:boolean = false;
  more:boolean = false;
  ShowMath:string = "More"
  availableCalculations;
  private availableCaluations1 = [
    {
      CalcName:"Calculate Mod",
      CalcDescription1:"a mod b =?",
      CalcDescription2:"Click Mod To Compute The Modular Arithmatic",
      CalcType:"MOD"
    },
    {
      CalcName:"Calculate GCD",
      CalcDescription1:"gcd(a,b) =?",
      CalcDescription2:"Click GCD To Compute The Greatest Common Devisor",
      CalcType:"GCD"
    },
    {
      CalcName:"Calculate LCM",
      CalcDescription1:"lcm(a,b) =?",
      CalcDescription2:"Click LCM To Compute The\nLowest Common Multiple       ",
      CalcType:"LCM"
    }
  ]

  private availableCalculations2 = [
    {
      CalcName:"Calculate Mod",
      CalcDescription1:"a mod b =?",
      CalcDescription2:"Click Mod To Compute The Modular Arithmatic\n\n",
      CalcType:"MOD"
    },
    {
      CalcName:"Calculate GCD",
      CalcDescription1:"gcd(a,b) =?",
      CalcDescription2:"Click GCD To Compute The Greatest Common Devisor\n\n",
      CalcType:"GCD"
    },
    {
      CalcName:"Calculate LCM",
      CalcDescription1:"lcm(a,b) =?",
      CalcDescription2:"Click LCM To Compute The\nLowest Common Multiple\n\n",
      CalcType:"LCM"
    },
    {
      CalcName:"Calculate Order",
      CalcDescription1:"|U(n)|=? OR |<(n)>|=?",
      CalcDescription2:"Click Order to calculate order of group or element",
      CalcType:"ORDER"
    },
    {
      CalcName:"Calculate Group",
      CalcDescription1:"Generate U(n)=? OR Z(n)=?",
      CalcDescription2:"Click Group to generate group and get info about it (Abelian?)",
      CalcType:"GROUP"
    },
    {
      CalcName:"Calculate Subgroup",
      CalcDescription1:"For U(n) what is <(n)>=?",
      CalcDescription2:"Click Subgroup to calculate the subgroup",
      CalcType:"SUBGROUP"
    },
  ]

  constructor() { }

  ngOnInit(): void {
    this.availableCalculations = this.availableCaluations1
  }

  calculateIT(type:string){
    
    switch(type){
      case "MOD":
        console.log(type)
        this.mod = !this.mod
      break;
      case "GCD":
        this.gcd = !this.gcd
      break;
      case "LCM":
        this.lcm = !this.lcm
      break;
      case "ORDER":
        this.order = !this.order
      break;
      case "SUBGROUP":
        this.subgroup = !this.subgroup
      break;
      case "GROUP":
        this.group = !this.group
      break;
    }
  }

  moreCalc(){
    if(this.more){
      this.availableCalculations = this.availableCaluations1
      this.ShowMath = "More";
    }else{
      this.availableCalculations = this.availableCalculations2
      this.ShowMath = "Less";
    }
    this.more = !this.more
    //window.location.reload()
  }
}
