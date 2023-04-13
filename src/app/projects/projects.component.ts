import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
    projectJson:any = [
    {
      title: "Join",
      image: "join.png",
      tech: ["Javascript", "HTML", "CSS"],
      description: "Group-project",
      links: ["github.com", "richardlieknis.com"]
    },
    {
      title: "Pokedex",
      image: "pokedex.png",
      tech: ["Javascript", "CSS", "API"],
      description: "Pocket Monster Deck",
      links: ["github.com", "richardlieknis.com"]
    },
  ]

}
