import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AdminComponent } from 'components/views/admin/admin.component';
import { adminRoutes } from "./admin.routes";
import {UserService} from "services";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
  ],
  declarations: [
    AdminComponent,
  ],
  providers: [
    UserService
  ],
  exports: [
    RouterModule
  ]
})
export class AdminModule {}
