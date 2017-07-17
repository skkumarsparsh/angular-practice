import { Component, OnInit, Input } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() data;
  metaData;
  chart:any;

  constructor(private AmCharts: AmChartsService) {

    this.metaData = {
      "type": "serial",
      "categoryField": "category",
      "startDuration": 1,
      "categoryAxis": {
        "gridPosition": "start"
      },
      "trendLines": [],
      "graphs": [
        {
          "balloonText": "[[title]] of [[category]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-1",
          "title": "graph 1",
          "type": "column",
          "valueField": "column-1"
        },
        {
          "balloonText": "[[title]] of [[category]]:[[value]]",
          "fillAlphas": 1,
          "id": "AmGraph-2",
          "title": "graph 2",
          "type": "column",
          "valueField": "column-2"
        },
        {
          "fillAlphas": 1,
          "fillColors": "#00B0FF",
          "id": "AmGraph-3",
          "lineColor": "#00B0FF",
          "negativeFillAlphas": 0,
          "negativeFillColors": "undefined",
          "negativeLineAlpha": 0,
          "title": "graph 3",
          "type": "column",
          "valueField": "column-3"
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
          "text": "Chart Title"
        }
      ],
      "dataProvider": [
        {
          "category": "category 1",
          "column-1": 8,
          "column-2": 5,
          "column-3": 38
        },
        {
          "category": "category 2",
          "column-1": 6,
          "column-2": 7,
          "column-3": 34
        },
        {
          "category": "category 3",
          "column-1": 2,
          "column-2": 3,
          "column-3": 12
        }
      ]
    }

   }

  ngOnInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", this.metaData);
  }

}
