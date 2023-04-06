import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translate(0px, -30px)'}),
        animate('1250ms', style({opacity: 1, transform: 'translate(0, 0)'}))
      ])]
    ),
  ]
  
})
export class HeaderComponent {
  isMenuOpen = true;
  isPlaying = false;
  menuImage = 'assets/img/menu1.png';
  images = [
    'assets/img/menu1.png',
    'assets/img/menu2.png',
    'assets/img/menu3.png',
    'assets/img/menu4.png',
    'assets/img/menu5.png'];

  toggleMenu() {
    if (this.isMenuOpen) {
      this.isPlaying = false;
      setTimeout(() => this.isMenuOpen = false, 500);
    } else {
      this.isMenuOpen = true;
      this.isPlaying = true;
    }
  }
}
