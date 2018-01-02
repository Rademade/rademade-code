import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SnippetsComponent } from './snippets.component';
import { SnippetsResolver } from './snippets.resolver';

import { snippetsRoutes } from './snippets.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(snippetsRoutes)
  ],
  declarations: [
    SnippetsComponent
  ],
  providers: [
    SnippetsResolver
  ],
  exports: [
    RouterModule
  ]
})
export class AdminSnippetsModule { }
