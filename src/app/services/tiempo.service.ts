import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey: string = '33f5d9c85285df8c5e706ee36f13d63e'; 
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor() {}

  async getWeatherForPuenteAlto() {
    try {
      const response = await axios.get(`${this.apiUrl}?q=Puente Alto,cl&appid=${this.apiKey}&units=metric`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener el clima:', error);
      throw error;
    }
  }
}
