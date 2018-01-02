import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: './public/public.module.ts#PublicModule?chunkName=Public'
  },
  {
    path: 'sign',
    loadChildren: './sign/sign.module.ts#SignModule?chunkName=Sign'
  },
  {
    path: 'admin',
    loadChildren: './admin/admin.module.ts#AdminModule?chunkName=Admin'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { errorHandler: (error) => console.error("Routing error(app.routing.ts):", error) }
    )
  ],
  exports: [
    RouterModule
  ]})
export class AppRoutingModule {}