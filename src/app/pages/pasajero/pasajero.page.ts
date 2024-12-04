import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {
  usuario:string=' '
  constructor(private navController: NavController) {}

  ngOnInit(): void {
    this.usuario=localStorage.getItem("usuario") ?? ' '
  }
  volver() {
    this.navController.navigateForward('/inicio');
  }
  ir() {
    this.navController.navigateForward('/info-pas');
  }
}
