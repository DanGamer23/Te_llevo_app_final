import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-fin-con',
  templateUrl: './fin-con.page.html',
  styleUrls: ['./fin-con.page.scss'],
})
export class FinConPage implements OnInit {
  direccion1:string=' '
  hora:string=' '
  punto:string=' '
  valor:string=' '
  constructor( private NavCtrl:NavController) { }


  ngOnInit() {
    this.direccion1=localStorage.getItem("direccion1") ?? ' '
    this.hora=localStorage.getItem("hora") ?? ' '
    this.punto=localStorage.getItem("punto") ?? ' '
    this.valor=localStorage.getItem("valor") ?? ' '
  }

  fin() {
    this.NavCtrl.navigateForward('/conductor');
  }
}
