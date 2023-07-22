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
      title: "Simple CRM",
      image: "crm-mockup.png",
      tech: ["TypeScript", "Firebase", "API", "SCSS"],
      description: "Angular & Firebase based Customer Relationship Management System. Create users and manage their data.",
      github: "https://github.com/richardlieknis/simplecrm",
      demo: "https://crm.richardlieknis.com/"
    },{
      title: "Join",
      image: "join-mockup.png",
      tech: ["Javascript", "HTML", "CSS"],
      description: "Task manager inspired by the Kanban system. Create and organize tasks using the drag and drop function, assign these to users, and use specific categories. ",
      github: "https://github.com/richardlieknis/join",
      demo: "https://join.richardlieknis.com/"
    },{
      title: "El Pollo Loco",
      image: "elpollo-mockup.png",
      tech: ["Javascript", "OOP", "HTML", "CSS"],
      description: "Javascript-based and object-orientated jump & run game. Help Pepe save the village from El Pollo Loco!",
      github: "https://github.com/richardlieknis/elPolloLoco",
      demo: "https://elpolloloco.richardlieknis.com/"
    },
    {
      title: "Ring of Fire",
      image: "ringoffire-mockup.png",
      tech: ["TypeScript", "Angular", "Firebase", "SCSS"],
      description: 'Famous Drinking-Game Online.',
      github: "https://github.com/richardlieknis/RingOfFire",
      demo: "https://richard-lieknis.developerakademie.net/ringoffire/"
    },
    {
      title: "Pokedex",
      image: "pokedex-mockup.png",
      tech: ["Javascript", "CSS", "API"],
      description: '"Pocket-Monster-Deck" using Rest API.',
      github: "https://github.com/richardlieknis/pokedex",
      demo: "https://richardlieknis.com/projects/pokedex/"
    },
  ]
  
  constructor() {
    
    
  }

  ngOnInit() {
    let odd = this.projIndex % 2;
    if (odd === 0) {
      this.preImgRight = false;
    } else this.preImgRight = true;
  }
}
