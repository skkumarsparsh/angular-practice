import { Component } from '@angular/core';
import { UtilsService } from './utils.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string;

  constructor(private utils: UtilsService) {
    this.title = this.utils.title;
    this.utils.titleChanged.subscribe(res => this.title = res)

      this.utils.notificationAdded.subscribe(res => {
        var divNode = document.createElement("span");
        divNode.innerHTML = '<span style="color:red"><i class="material-icons">warning</i>'+ res +'</span><hr>';
        document.getElementById("testify").appendChild(divNode);
      });
  }

}
