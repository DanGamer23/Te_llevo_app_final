import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-p404',
  templateUrl: './p404.page.html',
  styleUrls: ['./p404.page.scss'],
})
export class P404Page implements OnInit {

  constructor(private navController: NavController) {}

  ngOnInit() {
  }

  volver() {
    this.navController.navigateForward('/home');
  }
}
