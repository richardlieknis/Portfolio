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
        style({ opacity: 0, transform: 'translate(0px, -20px)'}),
        animate('850ms', style({opacity: 1, transform: 'translate(0, 0)'}))
      ])]
    ),

    trigger('slideIn', [
      state('show', style({
        // transform: 'translateY(-2000px)',
        // opacity: 1,
      })),
      state('hide', style({
        transform: 'translateY(1000px)',
        opacity: 0,
      })),
      transition('* <=> *', [
        animate('500ms')
      ])
    ])

  ],

})
export class HeaderComponent implements OnChanges {
  menuState = 'hide';
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
      this.menuState = 'hide';
      this.closeMenuAnimation();
      setTimeout(() => this.isMenuOpen = false, 500);
    } else if (!this.isPlaying) {
      setTimeout(() => this.menuState = 'slide', 500);
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
