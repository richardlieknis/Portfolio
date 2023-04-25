import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LegalnoticeComponent } from '../legalnotice/legalnotice.component';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(public dialog: MatDialog) {}

  openImprint() {
    this.dialog.open(LegalnoticeComponent, {
      height: '600px'
    });
  }
}
