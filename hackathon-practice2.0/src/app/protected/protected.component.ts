import { Component,EventEmitter } from '@angular/core';
import { UtilsService } from './utils.service';
import { AuthService } from '../auth.service';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css']
})
export class ProtectedComponent {
  loaded=false;
  data;
  title: string;
  agents;
  metrics;
  k = 0;
  z = 0;
  checked=false;
  core1;
  core2;
  core3;

  emitter = new EventEmitter<any>();
  constructor(private utils: UtilsService, private authService: AuthService, private route: Router, public snackBar: MdSnackBar,private http: Http) {
    this.emitter.subscribe(res => this.z--);
    this.utils.loaded.subscribe(res => this.loaded = res);
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      this.agents = this.utils.getAgents(this.data);
      if(this.utils.firstLoad4==true) {
        for(var i=0;i<this.agents.length;i++) {
          this.utils.comparecheckboxes.push(false);
        }
      }
      console.log(this.utils.comparecheckboxes);
      this.utils.firstLoad4 = false;
      console.log(this.data);
      this.metrics = this.utils.getHeaderNames(this.data);
    })
    this.core1 = this.utils.coreMetrics[0];
    this.core2 = this.utils.coreMetrics[1];
    this.core3 = this.utils.coreMetrics[2];
    this.title = this.utils.title;
    this.utils.titleChanged.subscribe(res => this.title = res);
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
        that.snackBar.open("Notification Cleared!", "Close", {
          duration: 2000,
        });
        that.emitter.emit("");
      })
      document.getElementById("testify").appendChild(divNode);
      this.k++;
      this.z++;
    });
  }

  logout() {
    this.authService.logout();
    this.route.navigate(['/login']);
    window.location.reload();
    console.log("Logged Out")
  }

  settings() {
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
    this.snackBar.open("All Notifications Cleared!", "Close", {
      duration: 2000,
    });
  }

  onChange1(change) {
    this.utils.coreMetrics[0] = change;
  }

  onChange2(change) {
    this.utils.coreMetrics[1] = change;
  }

  onChange3(change) {
    this.utils.coreMetrics[2] = change;
  }

  modalclosed() {
    this.utils.coreMetricsChanged.emit();
  }

  modalclosed2() {
    this.utils.goalsChanged.emit();
  }

  modalclosed3() {
  }

  checkboxcheck(i) {
    this.utils.comparecheckboxes[i] = !this.utils.comparecheckboxes[i];
  }

  slidetogglechecked() {
    this.checked = !this.checked;
    this.utils.checked = this.checked;
    if(this.checked==true) {
      this.utils.slidetoggle.emit(this.checked);
      document.getElementById("outlet").setAttribute("style","background-color:#222");
    }
    else {
      this.utils.slidetoggle.emit(this.checked);
      document.getElementById("outlet").setAttribute("style","background-color:#f0f8ff");
    }
    console.log(this.checked);
  }
}
