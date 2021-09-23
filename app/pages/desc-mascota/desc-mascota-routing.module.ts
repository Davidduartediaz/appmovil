import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescMascotaPage } from './desc-mascota.page';

const routes: Routes = [
  {
    path: '',
    component: DescMascotaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescMascotaPageRoutingModule {}
