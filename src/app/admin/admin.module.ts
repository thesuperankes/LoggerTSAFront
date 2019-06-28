import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from '../admin/admin.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { MaterialModule } from '../Common/material/material.module'
import { NgBootstrapModule } from '../Common/ng-bootstrap/ng-bootstrap.module'

@NgModule({
  declarations: [AdminComponent, HomeComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    NgBootstrapModule
  ]
})
export class AdminModule { }
