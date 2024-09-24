import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MySkillsService {

  constructor() { }

  MySkills = ["HTML", "CSS", "Sass", "Bootstrap", "React", "Angular", "Javascript", "Typescript", "C#", ".Net 8.0", "MVC", "Web API", "Sql"]
}
