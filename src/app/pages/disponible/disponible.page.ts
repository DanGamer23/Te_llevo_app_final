import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { viaje_con } from 'src/app/modelo/viaje_con';
import { CrudviajeConService } from 'src/app/services/crudviaje-con.service';

@Component({
  selector: 'app-disponible',
  templateUrl: './disponible.page.html',
  styleUrls: ['./disponible.page.scss'],
})
export class DisponiblePage implements OnInit {
  viaje_con: viaje_con={capacidad:' ' , destino:' ',inicio:' ',nombre:' ', precio: ' ' }
  lista_viaje:viaje_con[ ]=[ ]

  direccion:string='Mall Plaza Tobalaba'
  hora:string='12'
  punto:string=' '
  valor:string=' '
  constructor(private crud:CrudviajeConService ,private navCtrl: NavController, ) { }

  ngOnInit() {
    this.listar()
    // this.hora=localStorage.getItem("hora") ?? ' '
    // this.punto=localStorage.getItem("punto") ?? ' '
    // this.valor=localStorage.getItem("valor") ?? ' '
    // this.direccion=localStorage.getItem("direccion") ?? ' '
  }

  listar(){
    this.crud.listar( ).subscribe(data=>{
      this.lista_viaje=data
    })
  }

  ir() {
    this.navCtrl.navigateForward('/en-camino');
  }
  noir() {
    this.navCtrl.navigateForward('/info-pas');
  }

}
