import { Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '@shared/guards/auth.guard';

export const usersRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: UsersComponent
  }
];
