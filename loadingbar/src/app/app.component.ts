import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {
  }

  ngOnInit() {
    let x = 300;
    this.loopStuffDown(x);
    console.log(x);
  }

  loopStuffDown(x){

    var i = x;
    (function loop(){
      if (i-- < 1) return;
      setTimeout(function(){
        document.getElementById("child").style.width = i + "px";
        loop();
      }, 5);
    })();
  }

}
