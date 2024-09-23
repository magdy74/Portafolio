import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-services',
  templateUrl: './card-services.component.html',
  styleUrl: './card-services.component.scss'
})
export class CardServicesComponent {
  @Input() service: {title:string, image: string, description: string}; 

  constructor() {
    this.service = {title: "", image: "", description: ""};
    
  }
}
