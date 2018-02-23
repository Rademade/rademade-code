import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChecklistsComponent } from 'checklists/checklists.component';
import { checklistsRoutes } from 'checklists/checklists.routes';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputModule } from '@shared/components/form-input/form-input.module';
import { ContentTabsetComponent } from './tabs/tabs.component';
import { ContentTabComponent } from 'checklists/tabs/tab.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(checklistsRoutes)
  ],
  declarations: [
    ChecklistsComponent,
    ContentTabsetComponent,
    ContentTabComponent
  ],
  providers: [
    ChecklistsApiService
  ]
})

export class ChecklistsModule {
}
