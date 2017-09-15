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
      this.loading(res);
    })
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },10);
  }

  loading(res) {
    if(document.getElementById("left") && document.getElementById("right") && document.getElementById("lefttext") &&
      document.getElementById("name")) {
      if(res==true) {
        document.getElementById("left").setAttribute("style","background-color:rgb(62,62,62);");
        document.getElementById("right").setAttribute("style","background-color:rgb(51,51,51);");
        document.getElementById("lefttext").setAttribute("style","color:white;");
        document.getElementById("name").setAttribute("style","color:white;");
      } else {
        document.getElementById("left").setAttribute("style","background:rgba(255,255,255,1);");
        document.getElementById("right").setAttribute("style","background:rgba(245,245,245,1);");
        document.getElementById("lefttext").setAttribute("style","rgba(140,140,140,1);");
        document.getElementById("name").setAttribute("style","color:rgba(30,30,30,1);");
      }
    }
  }

}
