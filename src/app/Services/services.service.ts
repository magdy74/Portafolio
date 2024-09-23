import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  
  MyServices:{title:string, image: string, description: string}[]; 

  constructor() { 
  this.MyServices= [{title: "Database Management", image: "database-management_15691780.png", description: "Designing, querying, and managing databases"}, 
                    {title: "Responsive Web Design", image: "responsive-design_12487751.png", description: "Ensuring the application works well on various devices (desktops, tablets, and mobiles)." }, 
                    {title: "Web Development", image: "web-development_1781736.png", description: "Creating, maintaining websites and ensuring that the web application is fast and scalable."}, 
                    {title: "API Development", image: "api_9635209.png", description: "Creating and managing RESTful for communication between the client and server"}];
  }

}