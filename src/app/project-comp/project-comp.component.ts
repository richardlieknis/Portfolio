import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-comp',
  templateUrl: './project-comp.component.html',
  styleUrls: ['./project-comp.component.scss']
})
export class ProjectCompComponent implements OnInit {
  @Input() preImgRight: boolean = false;
  @Input() projIndex: number = 0;

  projectJson:any = [
    {
      title: "Join",
      image: "join.png",
      tech: ["Javascript", "HTML", "CSS"],
      description: "Group-project",
      github: "https://github.com",
      demo: "https://github.com"
    },
    {
      title: "Pokedex",
      image: "pokedex.png",
      tech: ["Javascript", "CSS", "API"],
      description: "Pocket Monster Deck",
      github: "https://github.com",
      demo: "https://github.com"
    },
  ]
  
  constructor() {
    
    
  }

  ngOnInit() {
    console.log(this.projectJson);
  }
}
