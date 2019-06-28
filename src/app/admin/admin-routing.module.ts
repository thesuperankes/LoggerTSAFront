import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { AdminComponent } from './admin.component'


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path:'Inicio',
        component:HomeComponent
      },{
        path:'Panel',
        component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
