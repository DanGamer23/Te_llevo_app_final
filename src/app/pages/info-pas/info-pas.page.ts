import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/tiempo.service';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import * as mapboxgl from 'mapbox-gl'
import { environment } from 'src/environments/environment';
import { Direccion } from 'src/app/modelo/Direccion';

@Component({
  selector: 'app-info-pas',
  templateUrl: './info-pas.page.html',
  styleUrls: ['./info-pas.page.scss'],
  
})
export class InfoPasPage implements OnInit {
  weatherData: any;
  direccion:string='Mall Plaza Tobalaba';
  ruta='https://api.mapbox.com/geocoding/v5/mapbox.places/XXXXX.json?access_token=pk.eyJ1IjoiZGFuaWVsLTIzIiwiYSI6ImNtMm0xaGd5cjBpZXAyaXB2cWNwZW1lZXUifQ.INJ_-Q08gOuXE80RIiXSlw'
  geometria='https://api.mapbox.com/directions/v5/mapbox/driving/-70.57875488465514,-33.59827295250235;LNG,lat?geometries=geojson&access_token=pk.eyJ1IjoiZGFuaWVsLTIzIiwiYSI6ImNtMm0xaGd5cjBpZXAyaXB2cWNwZW1lZXUifQ.INJ_-Q08gOuXE80RIiXSlw'
  map:mapboxgl.Map;
  mis_direcciones: Direccion[]=[]

  hora:string=' '

  constructor(private navCtrl:NavController,private http:HttpClient,private weatherService: WeatherService) { }
  ngOnInit() {
    // this.getWeatherForPuenteAlto();
    this.mapa()
  }

  // async getWeatherForPuenteAlto() {
  //   try {
  //     this.weatherData = await this.weatherService.getWeatherForPuenteAlto();
  //   } catch (error) {
  //     console.error('Error al obtener el clima:', error);
  //   }
  // }

  borrar(){
    this.mis_direcciones=[]
    this.mapa()
  }

  mapa(){
    this.map = new mapboxgl.Map({
    accessToken: environment.MAPBOX_ACCESS_TOKEN,
    container: 'mapa-box',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-70.57875488465514, -33.59827295250235 ],
    zoom:16
    });
    new mapboxgl.Marker({color:'blue'}).setLngLat([-70.57875488465514, -33.59827295250235 ]).addTo(this.map)
  }

  buscar(){
    var nueva_ruta=this.ruta.replaceAll('XXXXX',this.direccion)
    this.http.get(nueva_ruta).subscribe((data)=>{
      let direcciones=JSON.parse(JSON.stringify(data))["features"]
      for (let index = 0; index < direcciones.length; index++) {
        const element = direcciones[index];
        let dire:Direccion={
          nombre:element.place_name,
          lng:element.center[0],
          lat:element.center[1]
        }
        this.mis_direcciones.push(dire)
      }
    })
  }

  direccion_seleccionada(ev){
    console.log(ev.detail.value)
    console.log(ev.detail.value["lat"])
    console.log(ev.detail.value["lng"])
    this.geometria=this.geometria.replaceAll('LNG',ev.detail.value["lng"])
    this.geometria=this.geometria.replaceAll('lat',ev.detail.value["lat"])
    this.marcador(ev.detail.value["lng"],ev.detail.value["lat"])

    this.generar_ruta()
  }

  marcador(lng:number,lat:number){
    new mapboxgl.Marker({color:'red'}).setLngLat([lng,lat]).addTo(this.map)
  }

  generar_ruta(){
    this.http.get(this.geometria).subscribe((data:any)=>{
      console.log(data.routes[0].geometry)
      this.map.addSource('route',{
        type:'geojson',
        data:{
          type:'Feature',
          geometry:data.routes[0].geometry,
          properties:{}
        }
      });
      this.map.addLayer({
        id:'route',
        type:'line',
        source:'route',
        layout:{
          "line-cap":'round',
          "line-join":'round'
        },
        paint:{
          "line-color":'green',
          "line-width":3
        }
      })
    })
  }

  validarInput(event: any) {
    const input = event.target.value;
    event.target.value = input.replace(/[^0-9]/g, '');
  }

  ir() {
    localStorage.setItem("hora",this.hora)
    localStorage.setItem("direccion",this.direccion)
    this.navCtrl.navigateForward('/disponible');
  }
  noir() {
    localStorage.setItem("hora",this.hora)
    this.navCtrl.navigateForward('/pasajero');
  }
}
