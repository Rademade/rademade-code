import { Routes } from '@angular/router';
import { UsersComponent } from 'users/users.component';
import { UsersResolver } from 'users/users.resolver';
import { AuthGuard } from '@shared/guards/auth.guard';

export const usersRoutes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component: UsersComponent,
    resolve: { users: UsersResolver }
  }
];
