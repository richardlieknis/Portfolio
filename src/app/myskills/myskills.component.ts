import { Component } from '@angular/core';

@Component({
  selector: 'app-myskills',
  templateUrl: './myskills.component.html',
  styleUrls: ['./myskills.component.scss']
})
export class MyskillsComponent {
skills: string[] = [
    'Angular',
    'TypeScript',
    'Javascript',
    'CSS',
    'HTML',
    'Firebase',
    'Git',
    'MaterialDesign',
    'Scrum',
    'Wordpress',
  ];
}
