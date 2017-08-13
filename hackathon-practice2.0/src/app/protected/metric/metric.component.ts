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

    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this.chart = this.afterAssignDataForLeadAgent();
      console.log(this.data);
    });
  }

  afterAssignDataForLeadAgent() {
    this.agents = this.utils.getAgents(this.data);
    let headers = this.utils.getHeaderNames(this.data);
    let months = this.utils.months;
    for (var i = 0; i < this.agents.length; i++) {
      let j = 0;
      this.metaData["dataProvider"].push({
        "category": this.agents[i],
        "column-1": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
        "column-2": parseInt(this.data[this.agents[i]][this.metric][months[j++]]),
        "column-3": parseInt(this.data[this.agents[i]][this.metric][months[j++]])
      })
    }
    this.utils.loaded.emit(true);
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  ngOnInit() {

  }

}
