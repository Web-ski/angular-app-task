import { Component, OnInit } from '@angular/core';
import { ApiService } from "./api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-app-task';
  posts:any;

  constructor(private service:ApiService) {}

  ngOnInit() {
    this.service.getApi()
      .subscribe(response => {
        this.posts = response;
      });
  }
}
