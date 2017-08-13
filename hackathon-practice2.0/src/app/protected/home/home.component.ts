import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  metric1;
  metric2;
  metric3;
  metricname1;
  metricname2;
  metricname3;
  metricmonth1;
  metricmonth2;
  metricmonth3;
  data;

  constructor(private utils:UtilsService, private http: Http) { 
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Home");
  }

  ngOnInit() {
    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      console.log(this.data);
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
    })
  }

}
