import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'components/views/public/public.module.ts#PublicModule?chunkName=Public'
  },
  {
    path: 'sign',
    loadChildren: 'components/views/sign/sign.module.ts#SignModule?chunkName=Sign'
  },
  {
    path: 'admin',
    loadChildren: 'components/views/admin/admin.module.ts#AdminModule?chunkName=Admin'
  },
  {
    path: 'error',
    loadChildren: 'components/views/not-found/not-found.module.ts#NotFoundModule?chunkName=NotFound'
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