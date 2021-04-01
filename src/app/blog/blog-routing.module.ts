import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { ArticleComponent } from '../article/article.component';

import {BlogComponent} from './blog.component';

const routes: Routes = [
  {
    path: ':slug',
    component: ArticleComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

