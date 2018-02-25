import { Routes } from '@angular/router';
import { ChecklistsComponent } from 'checklists/checklists.component';
import { ChecklistsResolver } from 'checklists/checklists.resolver';

export const checklistsRoutes: Routes = [
  {
    path: '',
    component: ChecklistsComponent,
    resolve: { checklists: ChecklistsResolver }
  }
];
