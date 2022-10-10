import { Component, OnInit } from '@angular/core';
import { ItmathserviceService } from 'src/app/itmathservice.service';

@Component({
  selector: 'app-appsuggestion',
  templateUrl: './appsuggestion.component.html',
  styleUrls: ['./appsuggestion.component.scss']
})
export class AppsuggestionComponent implements OnInit {
  noty:boolean = false;
  savedStatus:string;
  sugg:string ="";
  sending = "";
  constructor(private sugS: ItmathserviceService) { }

  ngOnInit(): void {
  }

  saveSuggestion(){
    this.sending = "is-loading"
    this.sugS.SendRecommendation(this.sugg).subscribe(
      data =>{
        this.noty =true;
        this.savedStatus = data.Feedback;
        this.sending = "";
      }
    );
  }
  byeNoty(){
    this.noty =false;
  }

}
