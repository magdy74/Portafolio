import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyProjectsService {

  Projects: {title:string, primaryImage:string, SecondaryImage: string, link: string, details: string}[];
  
  constructor() { 
    this.Projects = [{title: "BookStore", primaryImage: "bookStoreHomePage.jpg", SecondaryImage: "bookStoreBooksPage.jpg", link: "https://book-store-magdy.netlify.app/", details:"HTML5, Sass, Material-UI, JavaScript, React.js and Redux Toolkit."},
                     {title: "Fashion E-commerce", primaryImage: "ClothesStoreHatsPage.jpg", SecondaryImage: "ClothesStoreHomePage.jpg", link: "https://spiffy-tapioca-098e6f.netlify.app/", details: "HTML5, CSS3, JavaScript, TypeScript, React.js, Redux, Redux Thunk and Firebase."} 
    ];
  }
}
