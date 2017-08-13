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
  metaData;
  chart: any;
  isCollapsed = true;
  isCollapsed2 = true;
  agents;
  months;
  metrics;
  headers;
  agent = "Lead Agent";

  max = new Array(100).fill(0).map(() => new Array(100).fill(0));
  redthreshold = new Array(100).fill(0).map(() => new Array(100).fill(0));
  warnthreshold = new Array(100).fill(0).map(() => new Array(100).fill(0));
  maxagentjan = new Array(100).fill(0).map(() => new Array(100).fill(0));
  maxagentfeb = new Array(100).fill(0).map(() => new Array(100).fill(0));
  maxagentmar = new Array(100).fill(0).map(() => new Array(100).fill(0));
  redthresholdagentjan = new Array(100).fill(0).map(() => new Array(100).fill(0));
  redthresholdagentfeb = new Array(100).fill(0).map(() => new Array(100).fill(0));
  redthresholdagentmar = new Array(100).fill(0).map(() => new Array(100).fill(0));
  warnthresholdagentjan = new Array(100).fill(0).map(() => new Array(100).fill(0));
  warnthresholdagentfeb = new Array(100).fill(0).map(() => new Array(100).fill(0));
  warnthresholdagentmar = new Array(100).fill(0).map(() => new Array(100).fill(0));
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
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.metrics = this.utils.getHeaderNames(this.data);
      this.agents = this.utils.getAgents(this.data);
      this.agents = this.agents.slice(0, this.agents.length - 1);
      this.months = this.utils.months;
      this.chart = this.afterAssignDataForLeadAgent();
    });

    if (this.utils.firstLoad) {
      let that = this;
      setTimeout(function () {
        that._service.success("Hi, Lead Agent! Welcome back!");
        that.utils.notificationAdded.emit(["Hi, Lead Agent! Welcome back!", "green", "check_circle"])
      }, 2000);
    }

  }

  test(n) {
    this.route.navigate(['/logged-in/agent', n]);
  }

  test2(n) {
    this.route.navigate(['/logged-in/metric', n]);
  }

  afterAssignDataForLeadAgent() {
    let lead = "Lead Agent"
    let core = this.utils.coreMetrics;
    let months = this.utils.months;
    let k;
    for (var i = 0; i < core.length; i++) {
      k = 0;
      this.metaData["dataProvider"].push({
        "category": core[i],
        "column-1": parseInt(this.data[lead][core[i]][months[k++]]),
        "column-2": parseInt(this.data[lead][core[i]][months[k++]]),
        "column-3": parseInt(this.data[lead][core[i]][months[k++]]),
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
