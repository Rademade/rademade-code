import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSnippetsListComponent } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.component';
import { AdminSnippetsListResolver } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.resolver';
import {RouterModule} from "@angular/router";
import {adminSnippetsListRoutes} from "./admin-snippets-list.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminSnippetsListRoutes)
  ],
  declarations: [
    AdminSnippetsListComponent
  ],
  providers: [
    AdminSnippetsListResolver
  ],
  exports: [
    RouterModule
  ]
})
export class AdminSnippetsListModule { }
