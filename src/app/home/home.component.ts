import { Component, OnInit } from '@angular/core';

import { SendMailService } from '../Service/send-mail.service';

import { MatSnackBar } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:SendMailService, private snackbar:MatSnackBar) { }

  InfoData = {
    IpData: "",
    Latitud: "",
    Longitud: "",
    NumeroPC: "",
    Fecha: "",
    Frezzer: null
  }

  IpPublic;

  Enviado = false;

  Body:any = `<h3>otro mas</h3>
  <br>
  <table>
    <tr>
      <td>Ip</td>
      <td>Latitud</td>
      <td>Longitud</td>
      <td>PC</td>
      <td>Fecha</td>
      <td>Frezzer</td>
    </tr>
    <tr>
      <td>${this.InfoData.IpData}</td>
      <td>${this.InfoData.Latitud}</td>
      <td>${this.InfoData.Longitud}</td>
      <td>${this.InfoData.NumeroPC}</td>
      <td>${this.InfoData.Fecha}</td>
      <td>${this.InfoData.Frezzer}</td>
    </tr>
  </table>`

  ngOnInit() {
    this.GetPublicIp();
    this.GetLocalization();
  }

  GetLocalization(){
    navigator.geolocation.getCurrentPosition((position)=>{
      this.InfoData.Latitud = position.coords.latitude.toString();
      this.InfoData.Longitud = position.coords.longitude.toString();

      console.log(position);
    });
  }

  GetPublicIp(){
    this.service.GetIpPublic().subscribe((data)=>{
      let response:any = data;
      this.InfoData.IpData = response.ip;
    })
  }

  SendMail(){
    console.log(this.InfoData);
    this.service.SendMail("Nuevo agregado",JSON.stringify(this.InfoData).toString()).subscribe((data)=>{
      let response:any = data;

      if(response.result == 200){
        this.snackbar.open("Se envio el correo");
      }else if(response.result == 500){
        this.snackbar.open("Ocurrio un error al enviar el correo informa personalmente");
      }
    })
  }


}
