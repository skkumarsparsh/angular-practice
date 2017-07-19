import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {
  id: string;
  metaData;
  data;
  chartdiv;
  chart = [];

  constructor(private route: ActivatedRoute, private http:Http, private AmCharts: AmChartsService) { 
    route.params.subscribe(params => { 
      this.id = params['id']; 
    })
    this.chartdiv = "chartdiv"+this.id;

    this.metaData = new Object(
      {
        "type": "serial",
        "categoryField": "date",
        "dataDateFormat": "YYYY-MM",
        "categoryAxis": {
          "minPeriod": "MM",
          "parseDates": true
        },
        "chartCursor": {
          "enabled": true,
          "categoryBalloonDateFormat": "MMM YYYY"
        },
        "trendLines": [],
        "graphs": [
          {
            "id": "AmGraph-1",
            "title": "Agencies No",
            "valueField": "column-1",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-2",
            "title": "Consecutive Misses 1",
            "valueField": "column-2",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-3",
            "title": "Customer No",
            "valueField": "column-3",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-4",
            "title": "New Customer No",
            "valueField": "column-4",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-5",
            "title": "Paid Up No",
            "valueField": "column-5",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-6",
            "title": "Parallel No",
            "valueField": "column-6",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-7",
            "title": "Real Misses No",
            "valueField": "column-7",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-8",
            "title": "Recent New Customers No 13 Weeks",
            "valueField": "column-8",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-9",
            "title": "Refinance No",
            "valueField": "column-9",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-10",
            "title": "Sales No",
            "valueField": "column-10",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-11",
            "title": "Sales Value",
            "valueField": "column-11",
            "type": "column",
            "fillAlphas": 1
          },
          {
            "id": "AmGraph-12",
            "title": "Scheduled Visit No",
            "valueField": "column-12",
            "type": "column",
            "fillAlphas": 1
          }
        ],
        "guides": [],
        "valueAxes": [
          {
            "id": "ValueAxis-1",
            "title": "Axis title"
          }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
          "enabled": true,
          "useGraphSettings": true
        },
        "titles": [
          {
            "id": "Title-1",
            "size": 15,
            "text": ""
          }
        ],
        "dataProvider": []
      }
    )

    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this.chart[parseInt(this.id)] = this.afterAssignDataForLeadAgent();
      console.log(this.data);
    });
  }

  ngOnInit() {
    
  }

  afterAssignDataForLeadAgent() {
    let agent = "Agent " + this.id;
    debugger;
    this.metaData["dataProvider"].push({
        "date": "2017-01",
        "column-1": parseInt(this.data[agent]["Agencies No"]["Jan-17"]),
        "column-2": parseInt(this.data[agent]["Consecutive Misses 1"]["Jan-17"]),
        "column-3": parseInt(this.data[agent]["Customer No"]["Jan-17"]),
        "column-4": parseInt(this.data[agent]["New Customer No"]["Jan-17"]),
        "column-5": parseInt(this.data[agent]["Paid Up No"]["Jan-17"]),
        "column-6": parseInt(this.data[agent]["Parallel No"]["Jan-17"]),
        "column-7": parseInt(this.data[agent]["Real Misses No"]["Jan-17"]),
        "column-8": parseInt(this.data[agent]["Recent New Customers No 13 Weeks"]["Jan-17"]),
        "column-9": parseInt(this.data[agent]["Refinance No"]["Jan-17"]),
        "column-10": parseInt(this.data[agent]["Sales No"]["Jan-17"]),
        "column-11": parseInt(this.data[agent]["Sales Value"]["Jan-17"]),
        "column-12": parseInt(this.data[agent]["Scheduled Visit No"]["Jan-17"])
      })

      this.metaData["dataProvider"].push({
        "date": "2017-02",
        "column-1": parseInt(this.data[agent]["Agencies No"]["Feb-17"]),
        "column-2": parseInt(this.data[agent]["Consecutive Misses 1"]["Feb-17"]),
        "column-3": parseInt(this.data[agent]["Customer No"]["Feb-17"]),
        "column-4": parseInt(this.data[agent]["New Customer No"]["Feb-17"]),
        "column-5": parseInt(this.data[agent]["Paid Up No"]["Feb-17"]),
        "column-6": parseInt(this.data[agent]["Parallel No"]["Feb-17"]),
        "column-7": parseInt(this.data[agent]["Real Misses No"]["Feb-17"]),
        "column-8": parseInt(this.data[agent]["Recent New Customers No 13 Weeks"]["Feb-17"]),
        "column-9": parseInt(this.data[agent]["Refinance No"]["Feb-17"]),
        "column-10": parseInt(this.data[agent]["Sales No"]["Feb-17"]),
        "column-11": parseInt(this.data[agent]["Sales Value"]["Feb-17"]),
        "column-12": parseInt(this.data[agent]["Scheduled Visit No"]["Feb-17"])
      })

      this.metaData["dataProvider"].push({
        "date": "2017-03",
        "column-1": parseInt(this.data[agent]["Agencies No"]["Mar-17"]),
        "column-2": parseInt(this.data[agent]["Consecutive Misses 1"]["Mar-17"]),
        "column-3": parseInt(this.data[agent]["Customer No"]["Mar-17"]),
        "column-4": parseInt(this.data[agent]["New Customer No"]["Mar-17"]),
        "column-5": parseInt(this.data[agent]["Paid Up No"]["Mar-17"]),
        "column-6": parseInt(this.data[agent]["Parallel No"]["Mar-17"]),
        "column-7": parseInt(this.data[agent]["Real Misses No"]["Mar-17"]),
        "column-8": parseInt(this.data[agent]["Recent New Customers No 13 Weeks"]["Mar-17"]),
        "column-9": parseInt(this.data[agent]["Refinance No"]["Mar-17"]),
        "column-10": parseInt(this.data[agent]["Sales No"]["Mar-17"]),
        "column-11": parseInt(this.data[agent]["Sales Value"]["Mar-17"]),
        "column-12": parseInt(this.data[agent]["Scheduled Visit No"]["Mar-17"])
      })
      
      return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

}
