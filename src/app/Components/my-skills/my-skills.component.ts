import { Component } from '@angular/core';
import { MySkillsService } from '../../Services/my-skills.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
  providers: [MySkillsService]
})
export class MySkillsComponent {

  MySkills:string[];

  constructor(mySkillsService: MySkillsService) {
    this.MySkills = mySkillsService.MySkills;
  }

}
