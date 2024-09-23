import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './Components/services/services.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutMePageComponent } from './Pages/about-me-page/about-me-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { MyProjectsComponent } from './Components/my-projects/my-projects.component';
import { NotFound404PageComponent } from './Pages/not-found-404-page/not-found-404-page.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: 'full'},
  {path: "home", component: HomePageComponent},
  {path: 'aboutme', component: AboutMePageComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'projects', component: MyProjectsComponent},
  {path: 'contact', component: ContactPageComponent},
  {path: '**', component: NotFound404PageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
