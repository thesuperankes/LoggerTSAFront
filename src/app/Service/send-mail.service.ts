import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private Http:HttpClient) { }

  SendMail(Subject:String,BodyMail:String){
    return this.Http.post(environment.endpoint+'SendMail',{asunto:Subject,cuerpo:BodyMail});
  }

  GetIpPublic(){
    return this.Http.get('https://api.ipify.org?format=json');
  }
}
