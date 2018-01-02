import { Routes } from '@angular/router';
import { UsersComponent } from 'admin/users/users.component';
import { UsersResolver } from 'admin/users/users.resolver';

export const usersRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: { users: UsersResolver }
  }
];
