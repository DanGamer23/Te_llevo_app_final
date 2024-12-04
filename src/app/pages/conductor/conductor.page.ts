import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { viaje_con } from 'src/app/modelo/viaje_con';
import { CrudviajeConService } from 'src/app/services/crudviaje-con.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  viaje_con: viaje_con={capacidad:' ' , destino:' ',inicio:' ',nombre:' ', precio: ' ' }
  lista_viaje:viaje_con[ ]=[ ]

  usuario:string=' '
  constructor(private crud:CrudviajeConService ,private navController: NavController) {}

  ngOnInit(): void {
    this.listar()
    this.usuario=localStorage.getItem("usuario") ?? ' '
  }

  listar(){
    this.crud.listar( ).subscribe(data=>{
      console.log(data)
      this.lista_viaje=data
    })
  }
  eliminar(id:any){
    this.crud.eliminar(id).then(( )=>{
      
    })
  }
  volver() {
    this.navController.navigateForward('/inicio');
  }
  viaje() {
    this.navController.navigateForward('/viaje-con');
  }
}
