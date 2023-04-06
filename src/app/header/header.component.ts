import { Component, OnChanges, SimpleChanges } from '@angular/core';
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
export class HeaderComponent implements OnChanges {

  isMenuOpen = false;
  isPlaying = false;
  menuImgCount = 0;
  menuImage = 'assets/img/menu1.png';
  images = [
    'assets/img/menu1.png',
    'assets/img/menu2.png',
    'assets/img/menu3.png',
    'assets/img/menu4.png',
    'assets/img/menu5.png'];
  
  ngOnChanges(changes: SimpleChanges): void {
  }


  toggleMenu() {
    if (this.isMenuOpen && !this.isPlaying) {
      this.closeMenuAnimation();
      setTimeout(() => this.isMenuOpen = false, 500);
    } else if (!this.isPlaying) {
      this.openMenuAnimation();
      this.isMenuOpen = true;
    }
  }


    
  openMenuAnimation(){
    let menuOpenAnim = setInterval(() => {
    this.isPlaying = true;
    this.menuImage = this.images[this.menuImgCount];
    this.menuImgCount++;
    if (this.menuImgCount == 5) {
      clearInterval(menuOpenAnim);
      this.menuImgCount = 4;
      this.isPlaying = false;
      } 
    }, 100)
  }

  closeMenuAnimation(){
    let menuCloseAnim = setInterval(() => {
    this.isPlaying = true;
    this.menuImage = this.images[this.menuImgCount];
    this.menuImgCount--;
    if (this.menuImgCount == -1) {
      clearInterval(menuCloseAnim);
      this.menuImgCount = 0;
      this.isPlaying = false;
      }
    }, 100)
  }

  
}
