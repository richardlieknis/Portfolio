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
      image: "join-mockup.png",
      tech: ["Javascript", "HTML", "CSS"],
      description: "Task manager inspired by the Kanban system. Create and organize tasks using the drag and drop function, assign these to users, and use specific categories. ",
      github: "https://github.com/rycc00/join",
      demo: "https://richardlieknis.com/projects/join/"
    },{
      title: "El Pollo Loco",
      image: "elpollo-mockup.png",
      tech: ["Javascript", "OOP", "HTML", "CSS"],
      description: "Javascript-based and object-orientated jump & run game. Help Pepe save the village from El Pollo Loco!",
      github: "https://github.com/rycc00/elPolloLoco",
      demo: "https://richardlieknis.com/projects/elpolloloco/"
    },
    {
      title: "Ring of Fire",
      image: "ringoffire-mockup.png",
      tech: ["TypeScript", "Angular", "Firebase", "SCSS"],
      description: 'Famous Drinking-Game Online',
      github: "https://github.com/rycc00/RingOfFire",
      demo: "https://richard-lieknis.developerakademie.net/ringoffire/"
    },
    {
      title: "Pokedex",
      image: "pokedex-mockup.png",
      tech: ["Javascript", "CSS", "API"],
      description: '"Pocket-Monster-Deck" using Rest API',
      github: "https://github.com/rycc00/pokedex",
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
