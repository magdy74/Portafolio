import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { BriefAboutMeComponent } from './Components/brief-about-me/brief-about-me.component';

import { ServicesComponent } from './Components/services/services.component';
import { MySkillsComponent } from './Components/my-skills/my-skills.component';
import { CardServicesComponent } from './Components/card-services/card-services.component';
import { MyProjectsComponent } from './Components/my-projects/my-projects.component';
import { CardProjectComponent } from './Components/card-project/card-project.component';
import { ContactMeComponent } from './Components/contact-me/contact-me.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AboutMePageComponent } from './Pages/about-me-page/about-me-page.component';
import { ServicesPageComponent } from './Pages/services-page/services-page.component';
import { ProjectsPageComponent } from './Pages/projects-page/projects-page.component';
import { ContactPageComponent } from './Pages/contact-page/contact-page.component';
import { NotFound404PageComponent } from './Pages/not-found-404-page/not-found-404-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BriefAboutMeComponent,
    ServicesComponent,
    MySkillsComponent,
    CardServicesComponent,
    MyProjectsComponent,
    CardProjectComponent,
    ContactMeComponent,
    FooterComponent,
    HomePageComponent,
    AboutMePageComponent,
    ServicesPageComponent,
    ProjectsPageComponent,
    ContactPageComponent,
    NotFound404PageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
