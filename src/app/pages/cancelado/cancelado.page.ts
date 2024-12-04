import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cancelado',
  templateUrl: './cancelado.page.html',
  styleUrls: ['./cancelado.page.scss'],
})
export class CanceladoPage implements OnInit {

  hora:string=' '
  punto:string=' '
  valor:string=' '
  capacidad:string=' '

  constructor(private navCtrl:NavController,) { }

  ngOnInit(): void {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.punto=localStorage.getItem("punto") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
    this.capacidad=localStorage.getItem("capacidad") ?? ' '
  }

  volver() {
    this.navCtrl.navigateForward('/viaje-con');
  }
  cancelar() {
    this.navCtrl.navigateForward('/conductor');
  }
}
