import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { usersRoutes } from './users.routes';
import { UserApiService } from '@shared/services/api/user.api.service';
import { CurrentUserService } from '@shared/services/current-user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputModule } from '@shared/components/form-input/form-input.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FormInputModule,
    ReactiveFormsModule,
    RouterModule.forChild(usersRoutes),
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UserApiService,
    CurrentUserService
  ],
  exports: [
    RouterModule
  ]
})
export class UsersModule { }
