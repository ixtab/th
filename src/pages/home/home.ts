import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero: string;
  mensaje: string;
  contador: number;

  constructor(public navCtrl: NavController,  private sms: SMS ) {
    this.contador = 0;
  }

  enviar(){
    this.sms.send(this.numero, this.mensaje);
    this.contador++
  }

}
