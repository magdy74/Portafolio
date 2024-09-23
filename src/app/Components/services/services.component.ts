import { Component } from '@angular/core';
import { ServicesService } from '../../Services/services.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  providers: [ServicesService]
})
export class ServicesComponent {
  MyServices:{title:string, image: string, description: string}[]; 

  constructor(servicesService:ServicesService) {
    this.MyServices = servicesService.MyServices;
  }

}
