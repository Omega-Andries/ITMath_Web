import { ItmathserviceService } from './../../../itmathservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  doing;
  constructor(private router:Router, private downS: ItmathserviceService) { }

  ngOnInit(): void {
  }

  downloadNOW(){
    //window.location.href = 'http://localhost:8080/api/download';
    this.doing = "is-loading";
    
    setTimeout(() => 
    {
      this.doing = "";
      this.router.navigateByUrl('https://play.google.com/store/apps/details?id=za.co.itmathematics')
     
    },
    9000);
  }
  stopLoading(){
    this.doing = "";
  }

}


function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
