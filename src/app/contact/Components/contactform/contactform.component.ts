import { Component, OnInit } from '@angular/core';
import { ItmathserviceService } from 'src/app/itmathservice.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {
  noty:boolean = false;
  savedStatus:string;
  name;
  email;
  message;
  subject;
  sending = ""
  constructor(private contactServ: ItmathserviceService) { }

  ngOnInit(): void {
  }

  saveContact(){
      this.sending = "is-loading"
      this.contactServ.SendMessage(this.name, this.email,this.subject, this.message, new Date()).subscribe(data =>{
      this.noty =true;
      this.savedStatus = data.Feedback;
      this.sending =""
    });
  }
  byeNoty(){
    this.noty =false;
  }
}
