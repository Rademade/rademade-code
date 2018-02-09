import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChecklistsComponent } from 'public/checklists/checklists.component';
import { checklistsRoutes } from 'public/checklists/checklists.routes';
import { ChecklistsApiService } from '@shared/services/api/checklists.api.service';
import { ChecklistsItemApiService } from '@shared/services/api/checklists-item.api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(checklistsRoutes)
  ],
  declarations: [
    ChecklistsComponent
  ],
  providers: [
    ChecklistsApiService,
    ChecklistsItemApiService
  ]
})

export class ChecklistsModule {
}
