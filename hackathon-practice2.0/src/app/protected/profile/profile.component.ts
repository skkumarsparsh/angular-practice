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
    },5);
  }

  loading(res) {
    if(document.getElementById("left") && document.getElementById("right")) {
      if(res==true) {
        document.getElementById("left").setAttribute("style","background-color:rgb(62,62,62);");
        document.getElementById("right").setAttribute("style","background-color:rgb(51,51,51);");
      } else {
        document.getElementById("left").setAttribute("style","background:rgba(255,255,255,1);");
        document.getElementById("right").setAttribute("style","background:rgba(245,245,245,1);");
      }
    }
  }

}
