import { Component,EventEmitter } from '@angular/core';
import { UtilsService } from './utils.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {

  title: string;
  k = 0;
  z = 0;
  emitter = new EventEmitter<any>();
  constructor(private utils: UtilsService, private authService: AuthService, private route: Router) {
    this.emitter.subscribe(res => this.z--)
    this.title = this.utils.title;
    this.utils.titleChanged.subscribe(res => this.title = res)
    let color = "red";
    this.utils.notificationAdded.subscribe(res => {
      var divNode = document.createElement("span");
      divNode.setAttribute("id", "" + this.k)
      divNode.setAttribute("style", "cursor:pointer;")
      divNode.setAttribute("title", "Click to dismiss this notification!")
      divNode.innerHTML = `
              <div style="color:`+ res[1] + `">
                <span style="padding-top: 4px;" class="pull-left"><i class="material-icons">`+ res[2] + `</i></span>
                <br>
                <br>`+ res[0] + `
              </div>
            <hr>`;
      let that = this;
      let k = this.k;
      divNode.addEventListener("click", function () {
        var div = document.getElementById("" + k);
        if (div) {
          div.parentNode.removeChild(div);
        }
        that.emitter.emit("");
      })
      document.getElementById("testify").appendChild(divNode);
      this.k++;
      this.z++;
    });
  }

  // <button id="button" class="mdl-button mdl-js-button mdl-button--icon pull-right"><span class="material-icons">close</span></button>

  logout() {
    this.authService.logout();
    this.route.navigate(['/login']);
    console.log("Logged Out")
  }

  settings() {
    this.route.navigate(['/logged-in/settings']);
    return false;
  }

  clearall() {
    for(var x=0;x<=this.k;x++) {
      var div = document.getElementById("" + x);
      if (div) {
        div.parentNode.removeChild(div);
      }
    }
    this.k=0;
    this.z=0;
  }
}
