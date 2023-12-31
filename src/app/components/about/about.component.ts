import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  constructor(public dialogRef: MatDialogRef<AboutComponent>) { }

  closeDialog() {
    this.dialogRef.close();
  }
}
