import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;
  balloonStuff = [];

  constructor(private utils: UtilsService) {
    this.title = this.utils.title;
    this.utils.titleChanged.subscribe(res => this.title = res)

    let test = ["Stuff to display", "More stuff to display"];
    for(var i=0;i<2;i++)
      {
        let lol = '<span><i class="material-icons">warning</i> ' + test[i] + '</span>';
        this.balloonStuff.push(lol);
      }

  }

}
