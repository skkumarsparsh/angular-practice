import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {
  id: string;
  metaData;
  data;
  data2;
  chartdiv;
  chart;
  metrics = ['dummy', 'Agencies No', 'Consecutive Misses 1', 'Customer No', 'New Customer No', 'Paid Up No', 'Parallel No', 'Refinance No', 'Sales Value', 'Scheduled Visit No', 'Real Misses No', 'Sales No', 'Recent New Customers No 13 Weeks']
  metric;
  agents;


  constructor(private route: ActivatedRoute, private http: Http, private AmCharts: AmChartsService, private utils: UtilsService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.metric = this.metrics[this.id];
      this.utils.titleChanged.emit(this.metric);
      this.assignData();
    })
    this.utils.loaded.emit(false);
    this.metric = this.metrics[this.id];
    this.utils.titleChanged.emit(this.metric);
    if(this.utils.checked==true) {
      this.metaData.theme="dark";
    } else {
      this.metaData.theme="default";
    }
  }

  assignData() {
    this.chartdiv = "chartdiv" + this.id;
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
          },
          {
            "balloonText": "[[category]] in [[title]]:[[value]]",
            "fillAlphas": 0.2,
            "id": "AmGraph-4",
            "title": "Apr 2017",
            "dashLength": 5,
            "type": "column",
            "valueField": "column-4"
          },
          {
            "balloonText": "[[category]] in [[title]]:[[value]]",
            "fillAlphas": 0.2,
            "id": "AmGraph-5",
            "title": "May 2017",
            "dashLength": 5,
            "type": "column",
            "valueField": "column-5"
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
            "text": this.metric + " Metric"
          }
        ],
        "dataProvider": []
      }
    )

    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      this.http.get(this.utils.url2).subscribe(res => {
        this.data2 = res.json();
        this.chart = this.afterAssignDataForLeadAgent();
      })
    });
  }

  afterAssignDataForLeadAgent() {
    this.metaData["dataProvider"] = [];
    this.agents = this.utils.getAgents(this.data);
    let headers = this.utils.getHeaderNames(this.data);
    let months = this.utils.getMonths(this.data);
    let months2 = this.utils.getMonths(this.data2);
    for (var i = 0; i < this.agents.length-1; i++) {
      let j = 0;
      this.metaData["dataProvider"].push({
        "category": this.agents[i],
        "column-1": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
        "column-2": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
        "column-3": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
        "column-4": parseInt(this.data2[this.agents[i]][this.metric][months2[0]]),
        "column-5": parseInt(this.data2[this.agents[i]][this.metric][months2[1]])
      })
    }
    this.utils.loaded.emit(true);
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  ngOnInit() {
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },200)
    this.utils.slidetoggle.subscribe(res => {
      if(res==true) {
        this.metaData.theme = "dark";
        this.AmCharts.destroyChart(this.chart);
        this.chart = this.afterAssignDataForLeadAgent();
        this.chart.invalidateSize();
      } else {
        this.metaData.theme = "default";
        this.AmCharts.destroyChart(this.chart);
        this.chart = this.afterAssignDataForLeadAgent();
        this.chart.invalidateSize();
      }
      this.loading(res);
    })
  }

  loading(res) {
    if(document.getElementById("cardcolor")&&document.getElementById("changecolor")&&document.getElementById("heading")) {
      if(res==true) {
        this.metaData.theme = "dark";
        document.getElementById("cardcolor").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("changecolor").setAttribute("style","background-color:#222");
        document.getElementById("heading").setAttribute("style","color:white");
        for(var i=0;i<14;i++) {
          if(document.getElementById("cardcolor2"+i)) {
            document.getElementById("cardcolor2"+i).setAttribute("style","background-color:rgb(51, 51, 51);");
          }
          for(var j=1;j<=7;j++) {
            if(document.getElementById("text"+j+""+i)) {
              document.getElementById("text"+j+""+i).setAttribute("style","color:white");
            }
          }
        }
      } else {
        this.metaData.theme = "default";
        document.getElementById("cardcolor").setAttribute("style","background-color:white");
        document.getElementById("changecolor").setAttribute("style","background-color:#f0f8ff");
        document.getElementById("heading").setAttribute("style","color:black");
        for(var i=0;i<14;i++) {
          if(document.getElementById("cardcolor2"+i)) {
            document.getElementById("cardcolor2"+i).setAttribute("style","background-color:white");
          }
          for(var j=1;j<=7;j++) {
            if(document.getElementById("text"+j+""+i)) {
              document.getElementById("text"+j+""+i).setAttribute("style","color:black");
            }
          }
        }
      }
    }
  }
}
