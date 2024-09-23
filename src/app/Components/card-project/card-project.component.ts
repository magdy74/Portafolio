import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss'
})
export class CardProjectComponent {

  @Input() Project: {title:string, primaryImage:string, SecondaryImage: string, link: string};

  constructor() {
    this.Project = {title: "", primaryImage:"", SecondaryImage:"",  link:""}
    
  }

}
