import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UsersResolver } from './users.resolver';
import { usersRoutes } from './users.routes';
import { UserApiService } from '@shared/services/api/user.api.service';
import { CurrentUserService } from '@shared/services/current-user.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(usersRoutes),
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UserApiService,
    CurrentUserService,
    UsersResolver
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule { }
