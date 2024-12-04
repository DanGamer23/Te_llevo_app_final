import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  usuario:string=' '
  constructor(private navCtrl:NavController, ) { }

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ' '
  }
  ir() {
    this.navCtrl.navigateForward('/conductor');
  }

  ir2() {
    this.navCtrl.navigateForward('/pasajero');
  }
  
  ir3() {
    this.navCtrl.navigateForward('/home');
  }
}
