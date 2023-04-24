import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfilComponent } from './profil/profil.component';
import { ViewsComponent } from './views/views.component';

const routes: Routes = [
  {path:'/',component:HomeComponent},
  {path:'view',component:ViewsComponent},
  {path:'profil',component:ProfilComponent},
  {path:'**',component:PageNotFoundComponent},
  {path:'detail',component:DetailsComponent},
  {path:'about',component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
