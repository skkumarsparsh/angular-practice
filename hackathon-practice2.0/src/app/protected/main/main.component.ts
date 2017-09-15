import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { AmChartsService } from "@amcharts/amcharts3-angular";
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  data;
  data2;
  metaData:any;
  chart: any;
  isCollapsed = true;
  isCollapsed2 = true;
  agents;
  months;
  metrics;
  headers;
  agent = "Lead Agent";

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


  constructor(private http: Http, private AmCharts: AmChartsService, private utils: UtilsService, private route: Router, private _service: NotificationsService) {
    this.isCollapsed = !this.isCollapsed;
    this.utils.loaded.emit(false);
    this.isCollapsed2 = !this.isCollapsed2;
    this.utils.titleChanged.emit("Dashboard");
    this.metaData = new Object({
      "responsive": {
        "enabled": true
      },
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
          "title": "Mar 2017",
          "type": "column",
          "valueField": "column-3"
        },
        {
          "balloonText": "[[category]] in [[title]]:[[value]]",
          "fillAlphas": 0.2,
          "dashLength": 5,
          "id": "AmGraph-4",
          "title": "Apr 2017",
          "type": "column",
          "valueField": "column-4"
        },
        {
          "balloonText": "[[category]] in [[title]]:[[value]]",
          "fillAlphas": 0.2,
          "dashLength": 5,
          "id": "AmGraph-5",
          "title": "May 2017",
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
    if(this.utils.checked==true) {
      this.metaData.theme="dark";
    } else {
      this.metaData.theme="default";
    }
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },200)
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.metrics = this.utils.getHeaderNames(this.data);
      this.agents = this.utils.getAgents(this.data);
      this.agents = this.agents.slice(0, this.agents.length - 1);
      this.months = this.utils.getMonths(this.data);
      this.http.get(this.utils.url2).subscribe(res => {
        this.data2 = res.json();
        this.chart = this.afterAssignDataForLeadAgent();
      })
    });
    this.utils.coreMetricsChanged.subscribe(res => {
      this.AmCharts.destroyChart(this.chart);
      this.chart = this.afterAssignDataForLeadAgent();
      this.chart.invalidateSize();
    })
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

  test(n) {
    this.route.navigate(['/logged-in/agent', n]);
  }

  test2(n) {
    this.route.navigate(['/logged-in/metric', n]);
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

  afterAssignDataForLeadAgent() {
    let lead = "Lead Agent";
    this.metaData["dataProvider"] = [];
    let core = this.utils.coreMetrics;
    let months = this.utils.getMonths(this.data);
    let months2 = this.utils.getMonths(this.data2);
    let k;
    for (var i = 0; i < core.length; i++) {
      k = 0;
      this.metaData["dataProvider"].push({
        "category": core[i],
        "column-1": parseInt(this.data[lead][core[i]][months[k++]]),
        "column-2": parseInt(this.data[lead][core[i]][months[k++]]),
        "column-3": parseInt(this.data[lead][core[i]][months[k++]]),
        "column-4": parseInt(this.data2[lead][core[i]][months2[0]]),
        "column-5": parseInt(this.data2[lead][core[i]][months2[1]])
      })
    }
    if (this.utils.firstLoad) {
      this.warnmet();
      this.utils.firstLoad = false;
    }
    this.utils.loaded.emit(true);
    return this.AmCharts.makeChart("chartdiv", this.metaData);
  }

  warnmet() {
    let that = this;
    for (var i = 0; i < 12; i++) {
      for (var j = 0; j < 3; j++) {
        that.max[i][j] = 0;
      }
    }
    for (that.i = 0; that.i < that.metrics.length; that.i++) {
      for (that.j = 0; that.j < that.months.length; that.j++) {
        if (that.max[that.i][that.j] < parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]])) {
          that.max[that.i][that.j] = parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]);
        }
      };
    };
    for (that.i = 0; that.i < that.metrics.length; that.i++) {
      for (that.j = 0; that.j < that.months.length; that.j++) {
        that.redthreshold[that.i][that.j] = (((that.max[that.i][that.j]) * 3) / 10);
        that.warnthreshold[that.i][that.j] = (((that.max[that.i][that.j]) * 5) / 10);
      };
    };
    let testVar = 23;
    for (that.i = 0; that.i < that.metrics.length; that.i++) {
      for (that.j = 0; that.j < that.months.length; that.j++) {
        if (parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]) <= that.warnthreshold[that.i][that.j]) {
          if (parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]) <= that.redthreshold[that.i][that.j]) {
            that._service.error("Warning", "Your values " + that.metrics[that.i] + " for " + that.months[that.j] + " are facing a downfall, please check them.");
            this.utils.notificationAdded.emit(["Your values " + that.metrics[that.i] + " for " + that.months[that.j] + " are facing a downfall, please check them.", "red", "error"]);
            //that is how you print it in notification.
            //make the color of graph red or amber and send a warning saying its gone wayyy tooo down
          } else {
            // that._service.success("Happy", "I'm so happy");
            //send notification or warning and if necessary changing color...
          }
        }
      };
    };
    let k = 0;
    for (that.i = 0; that.i < that.months.length; that.i++) {
      that.j = 0;
      that.metrics.forEach(metric => {
        if (parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) > parseInt(that.data["Lead Agent"][metric][that.months[that.i + 1]])) {
          //special case where data is compared with previous months data to check decreasing trend
          /*calci 30%*/
          k = ((parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) * 3) / 10);
          if ((parseInt(that.data["Lead Agent"][metric][that.months[that.i]]) - k) > parseInt(that.data["Lead Agent"][metric][that.months[that.i + 1]])) {
            //send warning sayin values are less than 30% than prev months
            this._service.warn("Warning", "The values of " + metric + " has faced a set-back in " + that.months[that.i] + " when compared to the previous month");
            this.utils.notificationAdded.emit(["The values of " + metric + " has faced a set-back in " + that.months[that.i] + " when compared to the previous month", "orange", "warning"])
          }
        }
        that.j++;
      });
    }
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
