import { Component } from '@angular/core';
import { MyProjectsService } from '../../Services/my-projects.service';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss',
  providers: [MyProjectsService]
})
export class MyProjectsComponent {

  MyProjects: {title:string, primaryImage:string, SecondaryImage: string, link: string}[];

  constructor(myProjects: MyProjectsService) {
    this.MyProjects = myProjects.Projects;
  }

}
