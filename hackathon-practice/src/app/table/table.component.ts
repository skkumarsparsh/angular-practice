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

  constructor(private http:Http, private utils: UtilsService) {
   }

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.afterDataReceived();
    });
  }

  afterDataReceived() {
    this.agents = this.utils.getAgents(this.data); // this function gives you all the agent names that the data contains
    this.headers = this.utils.getHeaderNames(this.data);    
  }

}
