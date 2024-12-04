import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/tiempo.service';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss'],
})
export class ClimaComponent  implements OnInit {
  weatherData: any;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {this.getWeatherForPuenteAlto();}

  async getWeatherForPuenteAlto() {
    try {
      this.weatherData = await this.weatherService.getWeatherForPuenteAlto();
    } catch (error) {
      console.error('Error al obtener el clima:', error);
    }
  }
}
