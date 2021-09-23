import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescMascotaPageRoutingModule } from './desc-mascota-routing.module';

import { DescMascotaPage } from './desc-mascota.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescMascotaPageRoutingModule
  ],
  declarations: [DescMascotaPage]
})
export class DescMascotaPageModule {}
