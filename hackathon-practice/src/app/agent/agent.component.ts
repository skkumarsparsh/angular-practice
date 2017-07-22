import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UtilsService } from '../utils.service'

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
  chart;
  agent;

  constructor(private route: ActivatedRoute, private http:Http, private AmCharts: AmChartsService, private utils: UtilsService) { 
    route.params.subscribe(params => { 
      this.id = params['id'];
      this.agent = "Agent " + this.id;
      this.utils.titleChanged.emit(this.agent + " Dashboard");
      this.assignData();
    })
    this.utils.titleChanged.emit("Agent " + this.id + " Dashboard");
    this.agent = "Agent " + this.id;
    // this.assignData();
  }


  assignData() {
    this.chartdiv = "chartdiv"+this.id;

    this.metaData = new Object(
      {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 1,
        "categoryAxis": {
          "gridPosition": "start"
        },
        "trendLines": [],
        "graphs": [
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-1",
            "title": "Agencies No",
            "type": "column",
            "valueField": "column-1"
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-2",
            "title": "Customer No",
            "type": "column",
            "valueField": "column-2"
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-3",
            "title": "New Customer No",
            "valueField": "column-3",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-4",
            "title": "Paid Up No",
            "valueField": "column-4",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-5",
            "title": "Sales No",
            "valueField": "column-5",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-6",
            "title": "Sales Value",
            "valueField": "column-6",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-7",
            "title": "Parallel No",
            "valueField": "column-7",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-8",
            "title": "Refinance No",
            "valueField": "column-8",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-9",
            "title": "Real Misses No",
            "valueField": "column-9",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-10",
            "title": "Recent New Customers No 13 Weeks",
            "valueField": "column-10",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-11",
            "title": "Consecutive Misses 1",
            "valueField": "column-11",
            "type": "column",
          },
          {
            "balloonText": "[[title]] in [[category]]:[[value]]",
            "fillAlphas": 1,
            "id": "AmGraph-12",
            "title": "Scheduled Visit No",
            "valueField": "column-12",
            "type": "column",
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
        "balloon": {
          "disableMouseEvents": false,
          "hideBalloonTime": 1000,
          "fixedPosition": true
        },
        "legend": {
          "enabled": true,
          "useGraphSettings": true
        },
        "titles": [
          {
            "id": "Title-1",
            "size": 15,
            "text": "Agent " + this.id + " Metric"
          }
        ],
        "dataProvider": []
      }
    )

    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this.chart = this.afterAssignDataForLeadAgent();
      console.log(this.data);
    });
  }

  ngOnInit() {
    // this.chart.validateData();
    // if(this.chart) {
    //   this.chart.invalidateSize();
    // }
  }

  ngAfterViewInit() {
    // if(this.chart) {
    //   this.chart.invalidateSize();
    // }
  }

  afterAssignDataForLeadAgent() {
    let headers = this.utils.getHeaderNames(this.data);
    console.log(headers)
    let months = this.utils.months;
    for(var i=0;i<months.length;i++) {
      let j=0;
      this.metaData["dataProvider"].push({
          "category": months[i],
          "column-1": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-2": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-3": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-4": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-5": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-6": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-7": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-8": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-9": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-10": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-11": parseInt(this.data[this.agent][headers[j++]][months[i]]),
          "column-12": parseInt(this.data[this.agent][headers[j++]][months[i]])
      })
    }      
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }


}
