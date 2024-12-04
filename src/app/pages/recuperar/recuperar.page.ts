import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
  usuario:string=''
  contrasena:string=''

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  eliminarEspacios(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/\s+/g, '');
  }
  ir() {
    this.navCtrl.navigateForward('/home');
  }
  noir() {
    this.navCtrl.navigateForward('/home');
  }
}
