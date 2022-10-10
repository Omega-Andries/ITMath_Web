import { ItmathserviceService } from './../../itmathservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  kgosi;
  logResponse;
  noty:boolean = false;
  some:number = 0;
  constructor(private loginS: ItmathserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  login(username:string, password:string){
   this.loginS.loginOwner(username, password).subscribe((data:any)=>{
     this.logResponse = data.Status;
     if(this.logResponse == "Logged In"){
       window.location.href='http://localhost:4200/management'
     }else{
      console.log(data)
      this.noty = true;
     }
     
   })  
  }

  byeNoty(){
    this.noty = false;
  }
}
