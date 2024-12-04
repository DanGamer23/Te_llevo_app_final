import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-en-camino',
  templateUrl: './en-camino.page.html',
  styleUrls: ['./en-camino.page.scss'],
})
export class EnCaminoPage implements OnInit {

  direccion:string=' '
  hora:string=' '
  valor:string=' '
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.hora=localStorage.getItem("hora") ?? ' '
    this.direccion=localStorage.getItem("direccion") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
    setTimeout(()=>{
      this.navCtrl.navigateForward(['/fin-pas'])
    },15000)
  }

}
