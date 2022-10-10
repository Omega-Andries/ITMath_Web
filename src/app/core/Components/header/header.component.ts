import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activecheck:string ="";
  
   constructor() {
    
   }

  ngOnInit(): void {
  }

  bona(){
    if(this.activecheck === "is-active"){
      this.activecheck ="";
    }else{
      this.activecheck = "is-active";
    }
  }
}
