import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private utils:UtilsService) { 
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Individual Agents");
    this.utils.slidetoggle.subscribe(res => {
      this.loading(res);
    })
  }

  ngOnInit() {
    this.loading(this.utils.checked);
  }

  loading(res) {
    if(res==true) {
      for(var i=1;i<=13;i++)
      {
        if(document.getElementById("cardcolor"+i)&&document.getElementById("linkcolor"+i)) {
          document.getElementById("cardcolor"+i).setAttribute("style","background-color:rgb(51, 51, 51);");
          document.getElementById("linkcolor"+i).setAttribute("style","color:#8FAEEE");
        }
      }
    } else {
      for(var i=1;i<=13;i++)
      {
        if(document.getElementById("cardcolor"+i)&&document.getElementById("linkcolor"+i)) {
          document.getElementById("cardcolor"+i).setAttribute("style","background-color:white");
          document.getElementById("linkcolor"+i).setAttribute("style","color:rgb(63,81,181);");
        }
      }
    }
  }
}
