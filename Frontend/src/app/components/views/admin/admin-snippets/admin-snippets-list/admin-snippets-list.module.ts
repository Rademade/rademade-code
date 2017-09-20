import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminSnippetsListComponent } from './admin-snippets-list.component';
import { AdminSnippetsListResolver } from 'components/views/admin/admin-snippets/admin-snippets-list/admin-snippets-list.resolver';
import { SnippetsService } from '@services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminSnippetsListComponent
  ],
  providers: [
    SnippetsService,
    AdminSnippetsListResolver
  ]
})
export class AdminSnippetsListModule { }
