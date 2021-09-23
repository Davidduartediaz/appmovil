import { Component } from '@angular/core';


interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  constructor() {}

  componentes : Componente[] = [
    {
      icon: 'earth-outline',
      name: 'Aventura',
      redirecTo: '/aventura'
    },
    {
      icon: 'bicycle',
      name: 'Bicicleta',
      redirecTo: '/bicicleta'
    },
    {
      icon: 'paw-outline',
      name: 'mascota',
      redirecTo: '/bicicleta'
    },
    {
      icon: 'people-circle-outline',
      name: 'Iniciar Sesion',
      redirecTo: '/iniciar-sesion'
    },
    {
      icon: 'person-circle-outline',
      name: 'Registrar',
      redirecTo: '/registrar'
    },
  ];
  
}
