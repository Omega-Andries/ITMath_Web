import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { HttpClientModule } from '@angular/common/http'
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItmathserviceService {
  //spring boot api
  private api_base_url = "https://itmathapi.herokuapp.com/api/"

  //django api
  private api_owner_url = "https://tsaomega-tech-api.herokuapp.com/api/"
  
  headers = {'content-type':'application/json'}
  constructor(private httpRequest: HttpClient) { }

  public SendRecommendation(recommendation:string): Observable<any>{
    return this.httpRequest.post(this.api_base_url + 'recommendation',
    {
      "Recommendation":recommendation
    },
    {
      "headers":this.headers
    })
  }

  public SendMessage(name:string, email:string, subject:string, message:string, date:Date): Observable<any>{
    return this.httpRequest.post(this.api_base_url + 'message',
    {
      "Name":name,
      "Email":email,
      "Subject":subject,
      "Message":message,
      "Date":date
    },
    {
      "headers":this.headers
    })
  }

  public loginOwner(un:string, pw:string){
    return this.httpRequest.post(this.api_owner_url + "login/",
    {
      Owner_Username:un,
      Owner_Password:pw
    },
    {
      "headers":this.headers
    })
  }
}
