import { AdminSnippetsListResolver } from "./admin-snippets-list.resolver";
import { AdminSnippetsListComponent } from "./admin-snippets-list.component";
import { Routes } from "@angular/router";


export const adminSnippetsListRoutes: Routes = [
  {
    path: '',
    component: AdminSnippetsListComponent,
    resolve: { snippets: AdminSnippetsListResolver }
  }
];
