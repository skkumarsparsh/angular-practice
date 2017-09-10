import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-compareagents',
  templateUrl: './compareagents.component.html',
  styleUrls: ['./compareagents.component.css']
})
export class CompareagentsComponent implements OnInit {

  data;
  chart;
  agents;

  constructor(private utils:UtilsService,private http:Http) {
    this.utils.loaded.emit(false);
    this.utils.titleChanged.emit("Compare Agents");
  }

  ngOnInit() {
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      this.utils.loaded.emit(true);
      this.agents = this.utils.getAgents(this.data);
    })
    this.utils.slidetoggle.subscribe(res => {
      this.loading(res);
    })
    this.loading(this.utils.checked);
  }

  loading(res) {
    if(document.getElementById("text")) {
      if(res==true) {
        document.getElementById("text").setAttribute("style","color:white");
      } else {
        document.getElementById("text").setAttribute("style","color:black");
      }
    }
  }

}
