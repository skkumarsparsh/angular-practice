import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private utils: UtilsService) {
    this.utils.titleChanged.emit("Profile");
    this.utils.loaded.emit(true);
  }

  ngOnInit() {
    this.utils.slidetoggle.subscribe(res => {
      if(document.getElementById("card")) {
        if(res==true) {
          document.getElementById("card").setAttribute("style","background-color:rgb(51,51,51);");
        } else {
          document.getElementById("card").setAttribute("style","background:rgba(255,255,255,1);");
        }
      }
    })
  }

}
