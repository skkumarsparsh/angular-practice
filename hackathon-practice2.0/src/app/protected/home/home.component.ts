import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Http } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  metric1;
  metric2;
  metric3;
  metric4;
  metricname1;
  metricname2;
  metricname3;
  metricname4;
  metricname1sub;
  metricname2sub;
  metricname3sub;
  metricname4sub;
  metricmonth1;
  metricmonth2;
  metricmonth3;
  metricmonth4;
  data;
  data1 = [];
  data2 = [];
  data3 = [];
  data4 = [];
  options = {
    timeOut: 4000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  constructor(private utils:UtilsService, private http: Http, private _service: NotificationsService) { 
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Home");
    this.data1 = this.utils.data1;
    this.data2 = this.utils.data2;
    this.data3 = this.utils.data3;
    this.data4 = this.utils.data4;
  }

  ngOnInit() {
    if (this.utils.firstLoad3) {
      let that = this;
      setTimeout(function () {
        that._service.success("Hi, Lead Agent! Welcome back!");
      }, 200);
      this.utils.firstLoad3 = false;
    }
    this.http.get(this.utils.url).subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.calValue();
    })
    this.utils.coreMetricsChanged.subscribe(res => {
      this.calValue();
    })
    this.utils.goalsChanged.subscribe(res => {
      this.calValue();
    })
    this.utils.slidetoggle.subscribe(res => {
      this.loading(res);
    })
    setTimeout(()=>{
      this.loading(this.utils.checked);
    },200);
  }

  lol() {
    return "Goal for";
  }

  calValue() {
    let lead = "Lead Agent";
    let core = this.utils.coreMetrics;
    let months = this.utils.getMonths(this.data);
    this.metricname1 = core[0];
    this.metricname2 = core[1];
    this.metricname3 = core[2];
    this.metricname4 = "Sales Value";
    if(this.metricname1.length > 11) {
      this.metricname1sub = this.metricname1.substring(0,11) + ".."
    } else {
      this.metricname1sub = this.metricname1
    }
    if(this.metricname2.length > 11) {
      this.metricname2sub = this.metricname2.substring(0,11) + ".."
    } else {
      this.metricname2sub = this.metricname2
    }
    if(this.metricname3.length > 11) {
      this.metricname3sub = this.metricname3.substring(0,11) + ".."
    } else {
      this.metricname3sub = this.metricname3
    }
    if(this.metricname4.length > 11) {
      this.metricname4sub = this.metricname4.substring(0,11) + ".."
    } else {
      this.metricname4sub = this.metricname4
    }
    this.putValue();
  }

  putValue() {
    var mon = this.utils.getMonths(this.data);
    var latestmon = mon[mon.length-1]
    this.data1 = [];
    this.data2 = [];
    this.data3 = [];
    this.data4 = [];
    this.data1 = [{
      "name": "Goal Value",
      "value": this.utils.goals[this.metricname1]
    },
    {
      "name": "Actual Value",
      "value" : this.data["Lead Agent"][this.metricname1][latestmon]
    }]
    this.data2 = [{
      "name": "Goal Value",
      "value": this.utils.goals[this.metricname2]
    },
    {
      "name": "Actual Value",
      "value" : this.data["Lead Agent"][this.metricname2][latestmon]
    }]
    this.data3 = [{
      "name": "Goal Value",
      "value": this.utils.goals[this.metricname3]
    },
    {
      "name": "Actual Value",
      "value" : this.data["Lead Agent"][this.metricname3][latestmon]
    }]
    this.data4 = [{
      "name": "Goal Value",
      "value": this.utils.goals[this.metricname4]
    },
    {
      "name": "Actual Value",
      "value" : this.data["Lead Agent"][this.metricname4][latestmon]
    }]
  }

  loading(res) {
    if(document.getElementById("cardcolor") && document.getElementById("textcolor") && document.getElementById("bordercolor") &&
      document.getElementById("cardcolor1") && document.getElementById("textcolor1") && document.getElementById("bordercolor1") &&
      document.getElementById("cardcolor2") && document.getElementById("textcolor2") && document.getElementById("bordercolor2") &&
      document.getElementById("cardcolor3") && document.getElementById("textcolor3") && document.getElementById("bordercolor3") &&
      document.getElementById("backgroundcard")) {
      if(res==true) {
        document.getElementById("cardcolor").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("textcolor").setAttribute("style","color:white");
        document.getElementById("bordercolor").setAttribute("style","border-top: 1px solid rgba(255,255,255,.1)");
        document.getElementById("linkcolor").setAttribute("style","color:#8FAEEE");
        document.getElementById("cardcolor1").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("textcolor1").setAttribute("style","color:white");
        document.getElementById("bordercolor1").setAttribute("style","border-top: 1px solid rgba(255,255,255,.1)");
        document.getElementById("linkcolor1").setAttribute("style","color:#8FAEEE");
        document.getElementById("cardcolor2").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("textcolor2").setAttribute("style","color:white");
        document.getElementById("bordercolor2").setAttribute("style","border-top: 1px solid rgba(255,255,255,.1)");
        document.getElementById("linkcolor2").setAttribute("style","color:#8FAEEE");
        document.getElementById("cardcolor3").setAttribute("style","background-color:rgb(51, 51, 51);");
        document.getElementById("textcolor3").setAttribute("style","color:white");
        document.getElementById("bordercolor3").setAttribute("style","border-top: 1px solid rgba(255,255,255,.1)");
        document.getElementById("linkcolor3").setAttribute("style","color:#8FAEEE");
        document.getElementById("backgroundcard").setAttribute("style","background-color:rgb(51, 51, 51);");
      } else {
        document.getElementById("cardcolor").setAttribute("style","background-color:white");
        document.getElementById("textcolor").setAttribute("style","color:rgba(0,0,0,.54)");
        document.getElementById("bordercolor").setAttribute("style","border-top: 1px solid rgba(0,0,0,.1)");
        document.getElementById("linkcolor").setAttribute("style","color:rgb(63,81,181);");
        document.getElementById("cardcolor1").setAttribute("style","background-color:white");
        document.getElementById("textcolor1").setAttribute("style","color:rgba(0,0,0,.54)");
        document.getElementById("bordercolor1").setAttribute("style","border-top: 1px solid rgba(0,0,0,.1)");
        document.getElementById("linkcolor1").setAttribute("style","color:rgb(63,81,181);");
        document.getElementById("cardcolor2").setAttribute("style","background-color:white");
        document.getElementById("textcolor2").setAttribute("style","color:rgba(0,0,0,.54)");
        document.getElementById("bordercolor2").setAttribute("style","border-top: 1px solid rgba(0,0,0,.1)");
        document.getElementById("linkcolor2").setAttribute("style","color:rgb(63,81,181);");
        document.getElementById("cardcolor3").setAttribute("style","background-color:white");
        document.getElementById("textcolor3").setAttribute("style","color:rgba(0,0,0,.54)");
        document.getElementById("bordercolor3").setAttribute("style","border-top: 1px solid rgba(0,0,0,.1)");
        document.getElementById("linkcolor3").setAttribute("style","color:rgb(63,81,181);");
        document.getElementById("backgroundcard").setAttribute("style","background-color:#264b00");
      }
    }
  }
}