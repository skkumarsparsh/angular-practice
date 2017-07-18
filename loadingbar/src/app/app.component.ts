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
  }

  loopStuffDown(x){

    var i = x;
    var k=0;
    (function loop(){
      if (i-- < 1) 
      {
        i=0;
        k=299;
        (function loop2(){
          if(i++ > 299) return;
          setTimeout(function(){
            document.getElementById("child").style.width = i + "px";
            document.getElementById("child").style.marginLeft = k + "px";
            k--;
            loop2();
          }, 5);
        })();
        return;
      }
      setTimeout(function(){
        document.getElementById("child").style.width = i + "px";
        document.getElementById("child").style.marginLeft = k + "px";
        k++;
        loop();
      }, 5);
    })();
  }

}
