import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor(private utils:UtilsService) {
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Individual Metrics");
    this.utils.slidetoggle.subscribe(res => {
      this.loading(res);
    })
  }

  ngOnInit() {
    this.loading(this.utils.checked);
  }

  loading(res) {
    if(res==true) {
      for(var i=1;i<=12;i++)
      {
        if(document.getElementById("cardcolor"+i)&&document.getElementById("linkcolor"+i)) {
         document.getElementById("cardcolor"+i).setAttribute("style","background-color:rgb(51, 51, 51);");
         document.getElementById("linkcolor"+i).setAttribute("style","color:#8FAEEE");
        }
      }
    } else {
      for(var i=1;i<=12;i++)
      {
        if(document.getElementById("cardcolor"+i)&&document.getElementById("linkcolor"+i)) {
          document.getElementById("cardcolor"+i).setAttribute("style","background-color:white");
          document.getElementById("linkcolor"+i).setAttribute("style","color:rgb(63,81,181);");
        }
      }
    }
  }

}
