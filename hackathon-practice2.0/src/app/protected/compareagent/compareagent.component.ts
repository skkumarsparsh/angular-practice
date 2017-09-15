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
  data2;
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
        "#78909C",
        "#990000"
      ],
      "startDuration": 0.2,
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
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
          "valueField": "column-1"
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-2",
          "title": "Customer No",
          "hidden": true,
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
          "valueField": "column-2"
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-3",
          "title": "New Customer No",
          "valueField": "column-3",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-4",
          "title": "Paid Up No",
          "valueField": "column-4",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-5",
          "title": "Sales No",
          "valueField": "column-5",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-6",
          "title": "Sales Value",
          "valueField": "column-6",
          "hidden": true,
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-7",
          "title": "Parallel No",
          "valueField": "column-7",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-8",
          "title": "Refinance No",
          "valueField": "column-8",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-9",
          "title": "Real Misses No",
          "hidden": true,
          "valueField": "column-9",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-10",
          "title": "Recent New Customers No 13 Weeks",
          "valueField": "column-10",
          "hidden": true,
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-11",
          "title": "Consecutive Misses 1",
          "valueField": "column-11",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
        },
        {
          "balloonText": "[[title]] in [[category]]:[[value]]",
          "bullet": "round",
          "id": "AmGraph-12",
          "title": "Scheduled Visit No",
          "valueField": "column-12",
          "lineThickness": 3,
          "dashLengthField": "dashedLength",
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
      this.afterAssignData();
      this.http.get(this.utils.url2).subscribe(res => {
        this.data2 = res.json();
        this.chart = this.assignMoreData();
      })
    })
    this.utils.slidetoggle.subscribe(res => {
      if(res==true) {
        this.metaData.theme = "dark";
        this.AmCharts.destroyChart(this.chart);
        this.afterAssignData();
        this.chart = this.assignMoreData();
        this.chart.invalidateSize();
      } else {
        this.metaData.theme = "default";
        this.AmCharts.destroyChart(this.chart);
        this.afterAssignData();
        this.chart = this.assignMoreData();
        this.chart.invalidateSize();
      }
      this.loading(res);
    })
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },200)
  }

  loading(res) {
    let ag = this.utils.getAgents(this.data);
      if(res==true) {
        this.metaData.theme = "dark";
        for(var i=0;i<ag.length;i++) {
          if(document.getElementById("card"+ag[i])) {
            document.getElementById("card"+ag[i]).setAttribute("style","background-color:rgb(51, 51, 51)");
          }
        }
      } else {
        this.metaData.theme = "default";
        for(var i=0;i<ag.length;i++) {
          if(document.getElementById("card"+ag[i])) {
            document.getElementById("card"+ag[i]).setAttribute("style","background-color:white");
          }
        }
      }
  }

  assignMoreData() {
    let headers = this.utils.getHeaderNames(this.data2);
    let months = this.utils.getMonths(this.data2);
    let j;
    for (var i = 0; i < months.length; i++) {
      j = 0;
      this.metaData["dataProvider"].push({
        "category": months[i],
        "column-1": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-2": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-3": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-4": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-5": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-6": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-7": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-8": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-9": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-10": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-11": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "column-12": parseInt(this.data2[this.agentname][headers[j++]][months[i]]),
        "dashedLength": 4
      })
    }
    return this.AmCharts.makeChart(""+this.chartdiv, this.metaData);
  }

  afterAssignData() {
    this.metaData["dataProvider"] = [];
    let headers = this.utils.getHeaderNames(this.data);
    let months = this.utils.getMonths(this.data);
    let j;
    for (var i = 0; i < months.length-1; i++) {
      j = 0;
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
    j = 0;
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
      "column-12": parseInt(this.data[this.agentname][headers[j++]][months[i]]),
      "dashedLength": 4
    })
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
