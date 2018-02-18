import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const appRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'home/home.module.ts#PublicHomeModule?chunkName=PublicHome'
      },
      {
        path: 'snippets',
        loadChildren: 'snippets/snippets.module.ts#SnippetsModule?chunkName=SnippetsModule'
      },
      {
        path: 'checklists',
        loadChildren: 'checklists/checklists.module.ts#ChecklistsModule?chunkName=ChecklistsModule'
      },
      {
        path: 'users',
        loadChildren: 'users/users.module.ts#UsersModule?chunkName=UsersModule'
      }
    ]
  },
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