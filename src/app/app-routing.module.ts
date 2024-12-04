import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./pages/conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'pasajero',
    loadChildren: () => import('./pages/pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'viaje-con',
    loadChildren: () => import('./pages/viaje-con/viaje-con.module').then( m => m.ViajeConPageModule)
  },
  {
    path: 'cancelado',
    loadChildren: () => import('./pages/cancelado/cancelado.module').then( m => m.CanceladoPageModule)
  },
  {
    path: 'viajando',
    loadChildren: () => import('./pages/viajando/viajando.module').then( m => m.ViajandoPageModule)
  },
  {
    path: 'fin-con',
    loadChildren: () => import('./pages/fin-con/fin-con.module').then( m => m.FinConPageModule)
  },
  {
    path: 'info-pas',
    loadChildren: () => import('./pages/info-pas/info-pas.module').then( m => m.InfoPasPageModule)
  },

  {
    path: 'disponible',
    loadChildren: () => import('./pages/disponible/disponible.module').then( m => m.DisponiblePageModule)
  },
  {
    path: 'en-camino',
    loadChildren: () => import('./pages/en-camino/en-camino.module').then( m => m.EnCaminoPageModule)
  },
  {
    path: 'fin-pas',
    loadChildren: () => import('./pages/fin-pas/fin-pas.module').then( m => m.FinPasPageModule)
  },
  {
    path: 'recuperar',
    loadChildren: () => import('./pages/recuperar/recuperar.module').then( m => m.RecuperarPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/p404/p404.module').then( m => m.P404PageModule)
  },


  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
