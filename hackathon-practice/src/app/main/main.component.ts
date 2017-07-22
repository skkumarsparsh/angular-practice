import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  data;
  metaData;
  chart:any;
  isCollapsed=true;
  isCollapsed2=true;
  agents;
  headers;

  options={
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };


  constructor(private http:Http, private AmCharts: AmChartsService, private utils: UtilsService, private route:Router, private _service: NotificationsService) {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsed2 = !this.isCollapsed2;
    this.utils.titleChanged.emit("Dashboard");
    this.metaData = new Object({
      "type": "serial",
      "categoryField": "category",
      "startDuration": 1,
      "fontSize": 13,
      "balloon": {
        "disableMouseEvents": false,
        "hideBalloonTime": 1000,
        "fixedPosition": true
      },
      "categoryAxis": {
        
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "[[category]] in [[title]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-1",
          "title": "Jan 2017",
          "type": "column",
          "valueField": "column-1"
        },
        {
          "balloonText": "[[category]] in [[title]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-2",
          "title": "Feb 2017",
          "type": "column",
          "valueField": "column-2"
        },
        {
          "balloonText": "[[category]] in [[title]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-3",
          "title": "Mar 2017",
          "type": "column",
          "valueField": "column-3"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
          "labelFrequency": 2,
          "logarithmic": true,
          "id": "ValueAxis-1",
          "title": "Number"
        }
      ],
      "allLabels": [],
      "legend": {
        "enabled": true,
        "useGraphSettings": true
      },
      "titles": [
        {
          "id": "Title-1",
          "size": 15,
          "text": "Core Metrics"
        }
      ],
      "dataProvider": []
    });
  }

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this._service.success("ngOnInit Invoked", "Yay! Good job boy!")
      console.log(this.data);
      this.agents = this.utils.getAgents(this.data); // this function gives you all the agent names that the data contains
      this.headers = this.utils.getHeaderNames(this.data); // this function gives you all the metrics names that each agent contains
      this.chart = this.afterAssignDataForLeadAgent();
    });
  }

  test(n) {
    this.route.navigate(['/agent',n]);
  }

  test2(n) {
    this.route.navigate(['/metric',n]);
  }

  afterAssignDataForLeadAgent() {
    let lead = this.agents[this.agents.length-1];
    let core = this.utils.coreMetrics;
    let months = this.utils.months;
    let k;
    for(var i=0;i<core.length;i++) {
      k=0;
      this.metaData["dataProvider"].push({
          "category": core[i],
          "column-1": parseInt(this.data[lead][core[i]][months[k++]]),
          "column-2": parseInt(this.data[lead][core[i]][months[k++]]),
          "column-3": parseInt(this.data[lead][core[i]][months[k++]]),
      })
    }
    return this.AmCharts.makeChart("chartdiv", this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
