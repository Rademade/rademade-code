import { Routes } from '@angular/router';
import { SnippetsComponent } from './snippets.component';
import { SnippetsResolver } from './snippets.resolver';


export const snippetsRoutes: Routes = [
  {
    path: '',
    component: SnippetsComponent,
    resolve: { snippets: SnippetsResolver }
  }
];
