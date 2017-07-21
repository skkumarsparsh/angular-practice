import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router'

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

  constructor(private http:Http, private AmCharts: AmChartsService, private utils: UtilsService, private route:Router) {
    this.isCollapsed = !this.isCollapsed;
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
          "title": "March 2017",
          "type": "column",
          "valueField": "column-3"
        }
      ],
      "guides": [],
      "valueAxes": [
        {
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
      this.chart = this.afterAssignDataForLeadAgent();
      console.log(this.data);
      let agents = this.utils.getAgents(this.data); // this function gives you all the agent names that the data contains
      console.log(agents); 
      let headers = this.utils.getHeaderNames(this.data); // this function gives you all the metrics names that each agent contains
      console.log(headers);
      let value = this.utils.getValuesForMonthsOfEachData(this.data[agents[4]][headers[3]]); // this function gives you the month dates in an array for ONE metric in ONE agent that is given to it
      console.log(value);
    });
  }

  test(n) {
    this.route.navigate(['/agent',n]);
  }

  afterAssignDataForLeadAgent() {
    this.metaData["dataProvider"].push({
        "category": "Collections",
        "column-1": parseInt(this.data["Lead Agent"]["Real Misses No"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Real Misses No"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Real Misses No"]["Mar-17"]),
      })

      this.metaData["dataProvider"].push({
        "category": "Sales",
        "column-1": parseInt(this.data["Lead Agent"]["Sales No"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Sales No"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Sales No"]["Mar-17"]),
      })

      this.metaData["dataProvider"].push({
        "category": "New Customers",
        "column-1": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Jan-17"]),
        "column-2": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Feb-17"]),
        "column-3": parseInt(this.data["Lead Agent"]["Recent New Customers No 13 Weeks"]["Mar-17"]),
      })

      return this.AmCharts.makeChart("chartdiv", this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
