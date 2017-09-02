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
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      console.log(this.data);
      this.calValue();
    })
    this.utils.coreMetricsChanged.subscribe(res => {
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
    return "Test";
  }

  calValue() {
    let lead = "Lead Agent";
    let core = this.utils.coreMetrics;
    let months = this.utils.months;
    this.metricname1 = core[0];
    this.metricname2 = core[1];
    this.metricname3 = core[2];
    this.metricname4 = "Sales Value";
    this.calGoal();
  //   let lar = this.data[lead][core[0]][months[0]] || "0";
  //   this.metricmonth1 = months[0];
  //   this.metric1 = lar;
  //   for(var i=1;i<3;i++) {
  //     let val = this.data[lead][core[0]][months[i]] || "0";
  //     if(val > lar){
  //       lar = val;
  //       this.metricmonth1 = months[i];
  //       this.metric1 = val;
  //     }
  //   }
  //   lar = this.data[lead][core[1]][months[0]] || "0"
  //   this.metricmonth2 = months[0];
  //   this.metric2 = lar;
  //   for(var i=1;i<3;i++) {
  //     let val = this.data[lead][core[1]][months[i]] || "0";
  //     if(val > lar){
  //       lar = val;
  //       this.metricmonth2 = months[i];
  //       this.metric2 = val;
  //     }
  //   }
  //   lar = this.data[lead][core[2]][months[0]] || "0"
  //   this.metricmonth3 = months[0];
  //   this.metric3 = lar;
  //   for(var i=1;i<3;i++) {
  //     let val = this.data[lead][core[2]][months[i]] || "0";
  //     if(val > lar){
  //       lar = val;
  //       this.metricmonth3 = months[i];
  //       this.metric3 = val;
  //     }
  //   }
  //   lar = this.data[lead]["Sales Value"][months[0]] || "0";
  //   this.metricmonth4 = months[0];
  //   this.metric4 = lar;
  //   for(var i=1;i<3;i++) {
  //     let val = this.data[lead]["Sales Value"][months[i]] || "0";
  //     if(val > lar) {
  //       lar = val;
  //       this.metricmonth4 = months[i];
  //       this.metric4 = val;
  //     }
  //   }
  }

  calGoal() {

  }

  loading(res) {
    if(document.getElementById("cardcolor") && document.getElementById("textcolor") && document.getElementById("bordercolor") &&
      document.getElementById("cardcolor1") && document.getElementById("textcolor1") && document.getElementById("bordercolor1") &&
      document.getElementById("cardcolor2") && document.getElementById("textcolor2") && document.getElementById("bordercolor2")) {
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
      }
    }
  }

}
