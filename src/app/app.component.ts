import { Component, OnInit } from '@angular/core';
import { Mode } from './lib/mode-toggle/mode-toggle.model';
import { ModeToggleService } from './lib/mode-toggle/mode-toggle.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Richard Lieknis - Frontend Developer';
  currentMode: Mode = Mode.LIGHT;

  constructor(private modeToggleService: ModeToggleService) {
    this.modeToggleService.modeChanged$.subscribe((mode: Mode) => {
      this.currentMode = mode;
    });
  }

  ngOnInit(): void {
      AOS.init({
            offset: 100,
            once: true,
        });
  }
}
