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

max=new Array(100).fill(null).map(()=>new Array(100).fill(null));
redthreshold=new Array(100).fill(null).map(()=>new Array(100).fill(null));
warnthreshold=new Array(100).fill(null).map(()=>new Array(100).fill(null));
maxagentjan=new Array(100).fill(null).map(()=>new Array(100).fill(null));
maxagentfeb=new Array(100).fill(null).map(()=>new Array(100).fill(null));
maxagentmar=new Array(100).fill(null).map(()=>new Array(100).fill(null));
redthresholdagentjan=new Array(100).fill(null).map(()=>new Array(100).fill(null));
redthresholdagentfeb=new Array(100).fill(null).map(()=>new Array(100).fill(null));
redthresholdagentmar=new Array(100).fill(null).map(()=>new Array(100).fill(null));
warnthresholdagentjan=new Array(100).fill(null).map(()=>new Array(100).fill(null));
warnthresholdagentfeb=new Array(100).fill(null).map(()=>new Array(100).fill(null));
warnthresholdagentmar=new Array(100).fill(null).map(()=>new Array(100).fill(null));
j=0; 
i=0;

options={
    timeOut: 5000,
    showProgressBar: true,
    pauseOnHover: true,
    clickToClose: true
  };

  constructor(private route: ActivatedRoute, private http:Http, private AmCharts: AmChartsService, private utils: UtilsService, private _service: NotificationsService) { 
    route.params.subscribe(params => { 
      this.id = params['id'];
      this.agent = "Agent " + this.id;
      this.utils.titleChanged.emit(this.agent + " Dashboard");
      this.assignData();
    })
    this.utils.titleChanged.emit("Agent " + this.id + " Dashboard");
    this.agent = "Agent " + this.id;
    // this.assignData();
  }


  assignData() {
    this.chartdiv = "chartdiv"+this.id;

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

    this.http.get('https://raw.githubusercontent.com/WV-no7/hello-world/master/god.json').subscribe(res => {
      this.data = res.json();
      this.metrics = this.utils.getHeaderNames(this.data);
      this.agents = this.utils.getAgents(this.data);
      this.months = this.utils.months;
      this.chart = this.afterAssignDataForLeadAgent();
      console.log(this.data);
    });
  }

  warnmet () {
 
  let that = this;    
 //lead agent anlss
       
       for (var i = 0; i < 12; i++) {
        for (var j = 0; j < 3; j++) {
          that.max[i][j]=0;
          
        }

       }
       for (that.i = 0; that.i < that.metrics.length; that.i++) {
               
for (that.j = 0; that.j < that.months.length; that.j++) {

if(that.max[that.i][that.j]<parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]])){
              
that.max[that.i][that.j]=parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]]);
    
}

};
      
};
            
for (that.i =0;that.i <that.metrics.length;that.i++) {

for ( that.j = 0; that.j < that.months.length; that.j++) {

            that.redthreshold[that.i][that.j]=(((that.max[that.i][that.j])*3)/10);

            that.warnthreshold[that.i][that.j]=(((that.max[that.i][that.j])*5)/10);
            console.log('pls come...'+that.redthreshold[that.i][that.j]);
            console.log('pls come...'+that.warnthreshold[that.i][that.j]);
             
          };
         
        };
       
      
        let testVar = 23;
       setTimeout(()=>that._service.success("Happy", "I'm so happy : "+ testVar),1000)
        //that is if you want to display notifications after a particular time interval. The 1000 denotes time in milliseconds.
        //Also notice that I've given it to print a variable value inside the function. You can use that too.
      that.i=0;
      that.j=0;
        for (that.i = 0; that.i < that.metrics.length; that.i++) {

          for (that.j = 0; that.j < that.months.length; that.j++) {

               if(parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]])<that.warnthreshold[that.i][that.j]){

                  if(parseInt(that.data["Lead Agent"][that.metrics[that.i]][that.months[that.j]])<that.redthreshold[that.i][that.j]){

                    that._service.warn("Sad", "I'm so sad");
                    //that is how you print it in notification.

                    
                    //make the color of graph red or amber and send a warning saying its gone wayyy tooo down

                  }

                  else{

                   
                   that._service.success("Happy", "I'm so happy");debugger

                    //send notification or warning and if necessary changing color...

                  }
                  
               }    
        };
         
      };
      //                                            |
      //anlss for agents of each metric for jan-17  V
      that.i=0;
      that.j=0
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          if(that.maxagentjan[that.i][that.j]<parseInt(that.data[agent][metric]["Jan-17"])){
              
that.maxagentjan[that.i][that.j]=parseInt(that.data[agent][metric]["Jan-17"]);
    
          }that.j++;
        });
            that.i++;
          });
          that.i=0;
          that.j=0;
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          
            that.redthresholdagentjan[that.i][that.j]=((parseInt(that.data[agent][metric]["Jan-17"])*3)/10);  
            that.warnthresholdagentjan[that.i][that.j]=((parseInt(that.data[agent][metric]["Jan-17"])*5)/10);
       that.j++;

          });            
      that.i++;

        });

      that.agents.forEach(element => {
        that.metrics.forEach(metric => {
          if(parseInt(that.data[element][metric]["Jan-17"])<that.warnthresholdagentjan[that.i][that.j]){
              if(parseInt(that.data[element][metric]["Jan-17"])<that.redthresholdagentjan[that.i][that.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }that.j++;
        });
        that.i++;
      });
 
      //                                            |
      //anlss for agents of each metric for Feb-17  V
      that.i=0;
      that.j=0
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          if(that.maxagentfeb[that.i][that.j]<parseInt(that.data[agent][metric]["Feb-17"])){
              
that.maxagentfeb[that.i][that.j]=parseInt(that.data[agent][metric]["Feb-17"]);
    
          }that.j++;
        });that.i++;
            
          });
          that.i=0;
          that.j=0;
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          
            that.redthresholdagentfeb[that.i][that.j]=((parseInt(that.data[agent][metric]["Feb-17"])*3)/10);  
            that.warnthresholdagentfeb[that.i][that.j]=((parseInt(that.data[agent][metric]["Feb-17"])*5)/10);
            that.j++;
          });
            that.i++;
      });
          that.i=0;
          that.j=0;
      that.agents.forEach(element => {
        that.metrics.forEach(metric => {
          if(parseInt(that.data[element][metric]["Feb-17"])<that.warnthresholdagentfeb[that.i][that.j]){
              if(parseInt(that.data[element][metric]["Feb-17"])<that.redthresholdagentfeb[that.i][that.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }that.j++;
        });
        that.i++;
      });
 
      //                                            |
      //anlss for agents of each metric for mar-17  V
      that.i=0;
      that.j=0
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          if(that.maxagentmar[that.i][that.j]<parseInt(that.data[agent][metric]["Feb-17"])){
              
            that.maxagentmar[that.i][that.j]=parseInt(that.data[agent][metric]["Feb-17"]);
    
          }that.j++;
        });
            that.i++;
          });
          that.i=0;
          that.j=0;
      that.agents.forEach(agent => {
        that.metrics.forEach(metric => {
          
            that.redthresholdagentmar[that.i][that.j]=((parseInt(that.data[agent][metric]["Mar-17"])*3)/10);  
            that.warnthresholdagentmar[that.i][that.j]=((parseInt(that.data[agent][metric]["Mar-17"])*5)/10);
            that.j++;
          });that.i++;
            
      });
        that.i=0;
        that.j=0;
      that.agents.forEach(element => {
        that.metrics.forEach(metric => {
          if(parseInt(that.data[element][metric]["Mar-17"])<that.warnthresholdagentmar[that.i][that.j]){
              if(parseInt(that.data[element][metric]["Mar-17"])<that.redthresholdagentmar[that.i][that.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }that.j++;
        });that.i++;
        
      });
          
          that.j=0;
           for (that.i = 0; that.i < that.months.length; that.i++) {
            that.metrics.forEach(metric =>{
              if(parseInt(that.data["Lead Agent"][metric][that.months[that.i]])>parseInt(that.data["Lead Agent"][metric][that.months[that.i+1]])){
                //special case where data is compared with previous months data to check decreasing trend
/*calci 30%*/          that.i=((parseInt(that.data["Lead Agent"][metric][that.months[that.i]])*3)/10);
                  if((parseInt(that.data["Lead Agent"][metric][that.months[that.i]])-that.i)>parseInt(that.data["Lead Agent"][metric][that.months[that.i+1]])){
                //send warning sayin values are less than 30% than prev months
                  }
              }     that.j++;        
          });
             
           }
    } 
          //my code has ended bro... :P XD

  ngOnInit() {
    // this.chart.validateData();
    // if(this.chart) {
    //   this.chart.invalidateSize();
    // }
  }

  ngAfterViewInit() {
    // if(this.chart) {
    //   this.chart.invalidateSize();
    // }
  }

  afterAssignDataForLeadAgent() {
    let headers = this.utils.getHeaderNames(this.data);
    console.log(headers)
    let months = this.utils.months;
    for(var i=0;i<months.length;i++) {
      let j=0;
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
    this.warnmet();   
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }


}
