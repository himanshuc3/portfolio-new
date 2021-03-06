import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import LandingPage from './landing-page/landing-page.component';


const routes: Routes = [{ path: 'about', component: AboutPageComponent},  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },{ path: '**', component: LandingPage},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
