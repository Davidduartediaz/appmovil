import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'aventura',
    loadChildren: () => import('./pages/aventura/aventura.module').then( m => m.AventuraPageModule)
  },
  {
    path: 'mascota',
    loadChildren: () => import('./pages/mascota/mascota.module').then( m => m.MascotaPageModule)
  },
  {
    path: 'bicicleta',
    loadChildren: () => import('./pages/bicicleta/bicicleta.module').then( m => m.BicicletaPageModule)
  },
  {
    path: 'iniciar-sesion',
    loadChildren: () => import('./pages/iniciar-sesion/iniciar-sesion.module').then( m => m.IniciarSesionPageModule)
  },
  {
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'descripcion',
    loadChildren: () => import('./pages/descripcion/descripcion.module').then( m => m.DescripcionPageModule)
  },
  {
    path: 'desc-mascota',
    loadChildren: () => import('./pages/desc-mascota/desc-mascota.module').then( m => m.DescMascotaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
