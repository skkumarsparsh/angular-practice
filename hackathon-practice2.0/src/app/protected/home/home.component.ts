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

  options = {
    timeOut: 3000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  constructor(private utils:UtilsService, private http: Http, private _service: NotificationsService) { 
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Home");
  }

  ngOnInit() {
    if (this.utils.firstLoad3) {
      let that = this;
      setTimeout(function () {
        that._service.success("Hi, Lead Agent! Welcome back!");
        // this.utils.notificationAdded.emit(["Hi, Lead Agent! Welcome back!", "green", "check_circle"])
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
  }

  calValue() {
    let lead = "Lead Agent";
    let core = this.utils.coreMetrics;
    let months = this.utils.months;
    this.metricname1 = core[0];
    this.metricname2 = core[1];
    this.metricname3 = core[2];
    let lar = this.data[lead][core[0]][months[0]]
    this.metricmonth2 = months[0];
    this.metric2 = lar;
    for(var i=1;i<3;i++) {
      let val = this.data[lead][core[0]][months[i]];
      if(val > lar){
        lar = val;
        this.metricmonth1 = months[i];
        this.metric1 = val;
      }
    }
    lar = this.data[lead][core[1]][months[0]]
    this.metricmonth2 = months[0];
    this.metric2 = lar;
    for(var i=1;i<3;i++) {
      let val = this.data[lead][core[1]][months[i]];
      if(val > lar){
        lar = val;
        this.metricmonth2 = months[i];
        this.metric2 = val;
      }
    }
    lar = this.data[lead][core[2]][months[0]]
    this.metricmonth3 = months[0];
    this.metric3 = lar;
    for(var i=1;i<3;i++) {
      let val = this.data[lead][core[2]][months[i]];
      if(val > lar){
        lar = val;
        this.metricmonth3 = months[i];
        this.metric3 = val;
      }
    }
    this.metricname4 = "Sales Value";
    lar = this.data[lead]["Sales Value"][months[0]];
    this.metricmonth4 = months[0];
    this.metric4 = lar;
    for(var i=1;i<3;i++) {
      let val = this.data[lead]["Sales Value"][months[i]];
      if(val > lar) {
        lar = val;
        this.metricmonth4 = months[i];
        this.metric4 = val;
      }
    }
  }

}
