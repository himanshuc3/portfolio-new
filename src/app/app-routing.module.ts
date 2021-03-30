import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import LandingPage from './landing-page/landing-page.component';


const routes: Routes = [{ path: '', component: LandingPage},{ path: 'about', component: AboutPageComponent}, { path: 'blog', component: BlogPageComponent}, { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
