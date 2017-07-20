import { Component } from '@angular/core';
import { UtilsService } from './utils.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private utils: UtilsService) {
    this.title = this.utils.title;
  }

}
