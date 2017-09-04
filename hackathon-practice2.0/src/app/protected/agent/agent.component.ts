import { Component, OnInit } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { UtilsService } from '../utils.service';
import { NotificationsService } from 'angular2-notifications';

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
  metrics;
  agent;
  agents;
  months;

  max = new Array(20).fill(0).map(() => new Array(20).fill(0));
  redthreshold = new Array(20).fill(0).map(() => new Array(20).fill(0));
  warnthreshold = new Array(20).fill(0).map(() => new Array(20).fill(0));
  maxagentjan = new Array(20).fill(0).map(() => new Array(20).fill(0));
  maxagentfeb = new Array(20).fill(0).map(() => new Array(20).fill(0));
  maxagentmar = new Array(20).fill(0).map(() => new Array(20).fill(0));
  redthresholdagentjan = new Array(20).fill(0).map(() => new Array(20).fill(0));
  redthresholdagentfeb = new Array(20).fill(0).map(() => new Array(20).fill(0));
  redthresholdagentmar = new Array(20).fill(0).map(() => new Array(20).fill(0));
  warnthresholdagentjan = new Array(20).fill(0).map(() => new Array(20).fill(0));
  warnthresholdagentfeb = new Array(20).fill(0).map(() => new Array(20).fill(0));
  warnthresholdagentmar = new Array(20).fill(0).map(() => new Array(20).fill(0));
  j = 0;
  i = 0;

  options = {
    timeOut: 2000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  constructor(private route: ActivatedRoute, private http: Http, private AmCharts: AmChartsService, private utils: UtilsService, private _service: NotificationsService) {
    route.params.subscribe(params => {
      this.id = params['id'];
      this.agent = "Agent " + this.id;
      this.utils.titleChanged.emit(this.agent + " Dashboard");
      this.assignData();
    })
    this.utils.loaded.emit(false);
    this.utils.titleChanged.emit("Agent " + this.id + " Dashboard");
    this.agent = "Agent " + this.id;
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

    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      this.metrics = this.utils.getHeaderNames(this.data);
      this.agents = this.utils.getAgents(this.data);
      this.agents = this.agents.slice(0, this.agents.length - 1);
      this.months = this.utils.months;
      this.chart = this.afterAssignDataForLeadAgent();
      console.log(this.data);
    });
  }

  warnmet() {
    let that = this;
    for (var i = 0; i < that.months.length; i++) {
      this._service.success("Check being performed", "Checking values of each agent in " + that.months[i])
      this.utils.notificationAdded.emit(["Checking values of each agent in " + that.months[i], "green", "check_circle"])
      that.i = 0;
      that.agents.forEach(agent => {
        that.j = 0
        that.metrics.forEach(metric => {
          if (that.maxagentjan[that.i][that.j] < parseInt(that.data[agent][metric][that.months[i]])) {
            that.maxagentjan[that.i][that.j] = parseInt(that.data[agent][metric][that.months[i]]);
          }
          that.j++;
        });
        that.i++;
      });
      that.i = 0;
      that.agents.forEach(agent => {
        that.j = 0;
        that.metrics.forEach(metric => {
          that.redthresholdagentjan[that.i][that.j] = ((parseInt(that.data[agent][metric][that.months[i]]) * 3) / 10);
          that.warnthresholdagentjan[that.i][that.j] = ((parseInt(that.data[agent][metric][that.months[i]]) * 5) / 10);
          that.j++;
        });
        that.i++;
      });
      that.i = 0;
      that.agents.forEach(element => {
        that.j = 0;
        that.metrics.forEach(metric => {
          if (parseInt(that.data[element][metric][that.months[i]]) <= that.warnthresholdagentjan[that.i][that.j]) {
            if (parseInt(that.data[element][metric][that.months[i]]) <= that.redthresholdagentjan[that.i][that.j]) {
              //agent below 30% turn red and warn
              this._service.error("Warning", element + " has a downtrend in " + metric + " for " + that.months[i]);
              this.utils.notificationAdded.emit([element + " has a downtrend in " + metric + " for " + that.months[i], "red", "error"])
              console.log(that.months[i])
            } else {
              //agent below 50% send warn
              console.log("agent below 50% send warn " + element + " " + metric)
            }
          }
          that.j++;
        });
        that.i++;
      });
    }
  }

  ngOnInit() {
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
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },50)
  }

  afterAssignDataForLeadAgent() {
    this.metaData["dataProvider"] = [];
    let headers = this.utils.getHeaderNames(this.data);
    console.log(headers)
    let months = this.utils.months;
    for (var i = 0; i < months.length; i++) {
      let j = 0;
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
    if (this.utils.firstLoad2) {
      this.warnmet();
      this.utils.firstLoad2 = false;
    }
    this.utils.loaded.emit(true);
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

  loading(res) {
    if(document.getElementById("cardcolor")&&document.getElementById("cardcolor2")&&document.getElementById("changecolor")&&document.getElementById("heading")) {
      if(res==true) {
        document.getElementById("changecolor").setAttribute("style","background-color:#222");
        this.metaData.theme = "dark";
        document.getElementById("cardcolor").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("cardcolor2").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("heading").setAttribute("style","color:white");
        for(var i=0;i<12;i++) {
          for(var j=1;j<=7;j++) {
            if(document.getElementById("text"+j+""+i)) {
              document.getElementById("text"+j+""+i).setAttribute("style","color:white");
            }
          }
        }
      } else {
        this.metaData.theme = "default";
        document.getElementById("changecolor").setAttribute("style","background-color:#f0f8ff");
        document.getElementById("cardcolor").setAttribute("style","background-color:white");
        document.getElementById("cardcolor2").setAttribute("style","background-color:white");
        document.getElementById("heading").setAttribute("style","color:black");
        for(var i=0;i<12;i++) {
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

