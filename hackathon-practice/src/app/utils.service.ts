import { Injectable } from '@angular/core';


@Injectable()
export class UtilsService {

  metaData;

  constructor() {

    this.metaData = {
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
        "gridPosition": "start"
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
          "fillColors": "#00B0FF",
          "id": "AmGraph-3",
          "lineColor": "#00B0FF",
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
    }

  }

}
