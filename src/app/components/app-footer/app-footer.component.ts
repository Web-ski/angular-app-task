import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AboutComponent} from "../about/about.component";
@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent {
  constructor(private dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AboutComponent, {
      data: {},
      panelClass: 'project-custom-dialog-class'
    });
  }
}
