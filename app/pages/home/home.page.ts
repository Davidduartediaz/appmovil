import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


interface Componente{
  icon: string; 
  name: string; 
  redirecTo:string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // componentes : Componente[] = [
  //   {
  //     icon: 'cafe-outline',
  //     name: 'Aventura',
  //     redirecTo: '/aventura'
  //   },
  //   {
  //     icon: 'paw-outline',
  //     name: 'Bicicleta',
  //     redirecTo: '/bicicleta'
  //   },
  //   {
  //     icon: 'paw-outline',
  //     name: 'mascota',
  //     redirecTo: '/bicicleta'
  //   },
  // ];

  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
