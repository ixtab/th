import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SMS } from '@ionic-native/sms';
import { CallNumber } from '@ionic-native/call-number';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero_sms: number;
  num_sms_string :string
  mensaje: string;
  contador: number;
  veces_sms: number;
  veces_llamada: number;

  numero_llamada: number;
  num_llamada_string :string;

  tiempo_sms : number;
  tiempo_llamada : number;

  constructor(public navCtrl: NavController,  private sms: SMS, private callNumber: CallNumber ) {
    this.contador = 0;
    this.tiempo_sms = 1;
    this.tiempo_llamada = 1;
  }

  intervalo_sms(){
    do {
      setInterval(()=>{ 
      this.enviar();
       }, (this.tiempo_sms)*1000);
    } while (this.contador < this.veces_sms)
    if (this.contador >= this.veces_sms){
      this.contador = 0;
    }
  }

  intervalo_llamada(){
    do {
      setInterval(()=>{ 
      this.llamar();
       }, (this.tiempo_llamada)*1000);
    } while (this.contador < this.veces_llamada)
    if (this.contador >= this.veces_llamada){
      this.contador = 0;
    }
  }

  enviar(){
    this.num_sms_string = this.numero_sms.toString();
      this.sms.send(this.num_sms_string, this.mensaje);
      this.contador++
    
  }
  llamar(){
    this.num_llamada_string = this.numero_llamada.toString();
    this.callNumber.callNumber(this.num_llamada_string, true)
      .then(res => console.log('Launched dialer!', res))
      .catch(err => console.log('Error launching dialer', err));
  }
}
