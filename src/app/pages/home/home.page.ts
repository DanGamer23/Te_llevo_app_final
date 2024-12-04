import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario:string=''
  contrasena:string=''

  constructor(private navCtrl:NavController,
      private alertCtrl: AlertController ) { }

  ngOnInit() {
  }

  validar(){
    if (this.contrasena=='1234') {
      localStorage.setItem("usuario",this.usuario)
      this.navCtrl.navigateForward(['/inicio'])
    } else {
      this.presntAlert()
    }
  }

  async presntAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Login',
      subHeader: 'Validacion de Datos',
      message: 'Ususario o Contraseña incorrecto',
      buttons: ['Action']
    })

    await alert.present();
  }
  eliminarEspacios(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/\s+/g, '');
  }

  ir() {
    this.navCtrl.navigateForward('/recuperar');
  }
}
