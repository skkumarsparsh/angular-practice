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

  max=[];
redthreshold=[];
warnthreshold=[];
maxagentjan=[][11];
maxagentfeb=[][11];
maxagentmar=[][11];
redthresholdagentjan=[][11];
redthresholdagentfeb=[][11];
redthresholdagentmar=[][11];
warnthresholdagentjan=[][11];
warnthresholdagentfeb=[][11];
warnthresholdagentmar=[][11];


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
      this.warnmet();
      debugger;
    });
  }

  warnmet () {
     
 //lead agent anlss
       
this.metrics.forEach(element => {
         
this.months.forEach(mon => {
            
if(this.max[this.i]<this.data["Lead Agent"][element][mon]){
              
this.max[this.i]=this.data["Lead Agent"][element][mon];
    
}
});
          
this.i++;
         
});
       
         
this.i = 0;
         
this.metrics.forEach(element => {

          this.months.forEach(mon => {

            this.redthreshold[this.i]=((this.max[this.i]*3)/10);

            this.warnthreshold[this.i]=((this.max[this.i]*5)/10);

          });
          
        });
        let that = this;
        let testVar = 23;
        setTimeout(()=>that._service.success("Happy", "I'm so happy : "+ testVar),2000)
        //This is if you want to display notifications after a particular time interval. The 2000 denotes time in milliseconds.
        //Also notice that I've given it to print a variable value inside the function. You can use that too.


        this.metrics.forEach(element => {

          this.months.forEach(mon => {

                if(this.data["Lead Agent"][element][mon]<this.warnthreshold){

                  if(this.data["Lead Agent"][element][mon]<this.redthreshold){

                    this._service.warn("Sad", "I'm so sad");
                    //This is how you print it in notification.

                    
                    //make the color of graph red or amber and send a warning saying its gone wayyy tooo down

                  }

                  else{

                   
                   this._service.success("Happy", "I'm so happy");

                    //send notification or warning and if necessary changing color...

                  }

                }

                  
        });

      });
      //                                            |
      //anlss for agents of each metric for jan-17  V
      this.i=0;
      this.j=0
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          if(this.maxagentjan[this.i][this.j]<this.data[agent][metric]["Jan-17"]){
              
this.maxagentjan[this.i][this.j]=this.data[agent][metric]["Jan-17"];
    
          }
        });
            
          });
          this.i=0;
          this.j=0;
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          
            this.redthresholdagentjan[this.i][this.j]=((this.data[agent][metric]["Jan-17"]*3)/10);  
            this.warnthresholdagentjan[this.i][this.j]=((this.data[agent][metric]["Jan-17"]*5)/10);
        });
            
      });

      this.agents.forEach(element => {
        this.metrics.forEach(metric => {
          if(this.data[element][metric]["Jan-17"]<this.warnthresholdagentjan[this.i][this.j]){
              if(this.data[element][metric]["Jan-17"]<this.redthresholdagentjan[this.i][this.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }
        });
        
      });
 
      //                                            |
      //anlss for agents of each metric for Feb-17  V
      this.i=0;
      this.j=0
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          if(this.maxagentfeb[this.i][this.j]<this.data[agent][metric]["Feb-17"]){
              
this.maxagentfeb[this.i][this.j]=this.data[agent][metric]["Feb-17"];
    
          }
        });
            
          });
          this.i=0;
          this.j=0;
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          
            this.redthresholdagentfeb[this.i][this.j]=((this.data[agent][metric]["Feb-17"]*3)/10);  
            this.warnthresholdagentfeb[this.i][this.j]=((this.data[agent][metric]["Feb-17"]*5)/10);
        });
            
      });
          this.i=0;
          this.j=0;
      this.agents.forEach(element => {
        this.metrics.forEach(metric => {
          if(this.data[element][metric]["Feb-17"]<this.warnthresholdagentfeb[this.i][this.j]){
              if(this.data[element][metric]["Feb-17"]<this.redthresholdagentfeb[this.i][this.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }
        });
        
      });
 
      //                                            |
      //anlss for agents of each metric for mar-17  V
      this.i=0;
      this.j=0
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          if(this.maxagentmar[this.i][this.j]<this.data[agent][metric]["Feb-17"]){
              
            this.maxagentmar[this.i][this.j]=this.data[agent][metric]["Feb-17"];
    
          }
        });
            
          });
          this.i=0;
          this.j=0;
      this.agents.forEach(agent => {
        this.metrics.forEach(metric => {
          
            this.redthresholdagentmar[this.i][this.j]=((this.data[agent][metric]["Mar-17"]*3)/10);  
            this.warnthresholdagentmar[this.i][this.j]=((this.data[agent][metric]["Mar-17"]*5)/10);
        });
            
      });
        this.i=0;
        this.j=0;
      this.agents.forEach(element => {
        this.metrics.forEach(metric => {
          if(this.data[element][metric]["Mar-17"]<this.warnthresholdagentmar[this.i][this.j]){
              if(this.data[element][metric]["Mar-17"]<this.redthresholdagentmar[this.i][this.j]){
                //agent below 30% turn red and warn
              }
              else{
                //agent below 50% send warn
              }
          }
        });
        
      });
          this.i=0;
          this.j=0;
           for (var index = 0; index < this.months.length; index++) {
            this.metrics.forEach(metric =>{
              if(this.data["Lead Agent"][metric][this.months[index]]>this.data["Lead Agent"][metric][this.months[index+1]]){
                //special case where data is compared with previous months data to check decreasing trend
/*calci 30%*/          this.i=((this.data["Lead Agent"][metric][this.months[index]]*3)/10);
                  if((this.data["Lead Agent"][metric][this.months[index]]-this.i)>this.data["Lead Agent"][metric][this.months[index+1]]){
                //send warning sayin values are less than 30% than prev months
                  }
              }             
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
    return this.AmCharts.makeChart(this.chartdiv, this.metaData);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }


}
