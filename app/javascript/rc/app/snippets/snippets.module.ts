import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SnippetsComponent } from './snippets.component';

import { snippetsRoutes } from './snippets.routes';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SnippetsApiService } from '@shared/services/api/snippets.api.service';
import { FormInputModule } from '@shared/components/form-input/form-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(snippetsRoutes)
  ],
  declarations: [
    SnippetsComponent
  ],
  providers: [
    SnippetsApiService,
  ],
  exports: [
    RouterModule
  ]
})

export class SnippetsModule { }