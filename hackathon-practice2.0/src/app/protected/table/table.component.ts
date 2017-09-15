import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  data;
  agents;
  headers;

  constructor(private http: Http, private utils: UtilsService) {
    this.utils.titleChanged.emit("Table");
    this.utils.loaded.emit(true);
  }

  ngOnInit() {
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.afterDataReceived();
    });
    this.utils.slidetoggle.subscribe(res => {
      setTimeout(() => {
        this.loading(res);
      },1)
    })
    setTimeout(() => {
      this.loading(this.utils.checked);
    },200)
  }

  afterDataReceived() {
    this.agents = this.utils.getAgents(this.data);
    this.headers = this.utils.getHeaderNames(this.data);
  }

  loading(res) {
    if(document.getElementById("changecolor")) {
      if(res==true) {
        document.getElementById("changecolor").setAttribute("style","background-color:#222");
        for(var i=0;i<14;i++) {
          if(document.getElementById("heading"+i)&&document.getElementById("cardcolor"+i)) {
            document.getElementById("heading"+i).setAttribute("style","color:white");
            document.getElementById("cardcolor"+i).setAttribute("style","background-color:rgb(51, 51, 51);");
            for(var j=0;j<12;j++) {
              for(var k=1;k<=7;k++) {
                if(document.getElementById("text"+k+" "+i+" "+j)) {
                  document.getElementById("text"+k+" "+i+" "+j).setAttribute("style","color:white");
                }
              }
            }
          }
        }
      } else {
        document.getElementById("changecolor").setAttribute("style","background-color:#f0f8ff");
        for(var i=0;i<14;i++) {
          if(document.getElementById("heading"+i)&&document.getElementById("cardcolor"+i)) {
            document.getElementById("heading"+i).setAttribute("style","color:black");
            document.getElementById("cardcolor"+i).setAttribute("style","background-color:white");
            for(var j=0;j<12;j++) {
              for(var k=1;k<=7;k++) {
                if(document.getElementById("text"+k+" "+i+" "+j)) {
                  document.getElementById("text"+k+" "+i+" "+j).setAttribute("style","color:black");
                }
              }
            }
          }
        }
      }
    }
  }

}