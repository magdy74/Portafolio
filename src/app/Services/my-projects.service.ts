import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  Projects: {title:string, primaryImage:string, SecondaryImage: string, link: string}[];
  
  constructor() { 
    this.Projects = [{title: "BookStore", primaryImage: "bookStoreHomePage.jpg", SecondaryImage: "bookStoreBooksPage.jpg", link: "https://book-store-magdy.netlify.app/"},
                     {title: "Fashion E-commerce", primaryImage: "ClothesStoreHatsPage.jpg", SecondaryImage: "ClothesStoreHomePage.jpg", link: "https://spiffy-tapioca-098e6f.netlify.app/"} 
    ];
  }
}
