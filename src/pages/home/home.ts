import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero: number;
  num_string :string
  mensaje: string;
  contador: number;
  veces: number;

  constructor(public navCtrl: NavController,  private sms: SMS ) {
    this.contador = 0;
  }

  enviar(){
    this.num_string = this.numero.toString();
    for (let i = 0; i < this.veces; i++){
      this.sms.send(this.num_string, "Mensaje nº " + (this.contador+1) +": "+ this.mensaje);
      this.contador++
    }
  }
}
