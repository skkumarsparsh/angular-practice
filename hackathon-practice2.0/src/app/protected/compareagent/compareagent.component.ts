import { Component, OnInit,Input } from '@angular/core';
import { UtilsService } from '../utils.service';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { Http } from '@angular/http';

@Component({
  selector: 'app-compareagent',
  templateUrl: './compareagent.component.html',
  styleUrls: ['./compareagent.component.css']
})
export class CompareagentComponent implements OnInit {

  data;
  metaData;
  chart;
  chartdiv;
  @Input() agentname;

  constructor(private utils:UtilsService,private http:Http,private AmCharts: AmChartsService) {}

  ngOnInit() {
    this.chartdiv = this.agentname+"";
    this.metaData = new Object({
      "type": "serial",
      "categoryField": "category",
      "colors": [
        "#FF6600",
        "#FCD202",
        "#B0DE09",
        "#0D8ECF",
        "#2A0CD0",
        "#CD0D74",
        "#CC0000",
        "#00CC00",
        "#0000CC",
        "#BF360C",
        "#F50057",
        "#333333",
        "#990000"
      ],
      "startDuration": 0.4,
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-1",
          "title": "Agencies No",
          "type": "smoothedLine",
          "lineThickness": 3.75,
          "valueField": "column-1"
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-2",
          "title": "Customer No",
          "type": "smoothedLine",
          "hidden": true,
          "lineThickness": 3.75,
          "valueField": "column-2"
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-3",
          "title": "New Customer No",
          "valueField": "column-3",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-4",
          "title": "Paid Up No",
          "valueField": "column-4",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-5",
          "title": "Sales No",
          "valueField": "column-5",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-6",
          "title": "Sales Value",
          "valueField": "column-6",
          "hidden": true,
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-7",
          "title": "Parallel No",
          "valueField": "column-7",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-8",
          "title": "Refinance No",
          "valueField": "column-8",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-9",
          "title": "Real Misses No",
          "hidden": true,
          "valueField": "column-9",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-10",
          "title": "Recent New Customers No 13 Weeks",
          "valueField": "column-10",
          "hidden": true,
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-11",
          "title": "Consecutive Misses 1",
          "valueField": "column-11",
          "type": "smoothedLine",
          "lineThickness": 3.75,
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-12",
          "title": "Scheduled Visit No",
          "valueField": "column-12",
          "type": "smoothedLine",
          "lineThickness": 3.75,
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
          "text": this.agentname
        }
      ],
      "dataProvider": []
    });
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      this.chart = this.afterAssignData();
    })
  }

  afterAssignData() {
    this.metaData["dataProvider"] = [];
    let headers = this.utils.getHeaderNames(this.data);
    let months = this.utils.months;
    for (var i = 0; i < months.length; i++) {
      let j = 0;
      this.metaData["dataProvider"].push({
        "category": months[i],
        "column-1": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-2": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-3": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-4": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-5": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-6": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-7": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-8": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-9": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-10": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-11": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
        "column-12": parseInt(this.data[this.agentname][headers[j++]][months[i]])
      })
    }
    return this.AmCharts.makeChart(""+this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
