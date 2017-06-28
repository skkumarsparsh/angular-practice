import { Component,OnInit,Output,EventEmitter,Input } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { jsonModel } from './json.model';
import { ArticleService } from './article.service';
import { AmChartsService } from "@amcharts/amcharts3-angular";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})

export class AppComponent {
  visible:boolean = false;
//  @Output() visibility = new EventEmitter<boolean>();
  articles: jsonModel[];
  errorMessage: string;
  private chart: any;
  l: string;
  c: string;
  chartConfig:any;
  // public lineChartData:Array<any> = [
  //   {data: [], label: 'Series A'}
  // ];
  ChartTime:number[];
  // public lineChartOptions:any = {
  //   responsive: true,
  //   scales: {
  //     xAxes: [{
  //       ticks: {
  //       beginAtZero:true
  //       }
  //     }]
  //   }
  // };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private _articleService: ArticleService,private AmCharts: AmChartsService) {
    this.articles = [];
    this.l = "loading";
    // this.lineChartData = [{data:[], label:"t"},{data:[], label:"t"},{data:[], label:"t"}];
    this.ChartTime = [];
    this.c = "nc";
  }

  ngOnInit():void {
    let self = this;
    self._articleService.getArticles().subscribe(
      response => this.articles = response, 
      error => this.errorMessage = < any > error, 
      () => setTimeout(() => this.completed(),1))
      this.chartConfig = {
      "type": "serial",
      "theme": "light",
      "dataSets": [{
        "dataProvider": [],
      }],
      "marginTop":0,
      "marginRight": 80,
      "valueAxes": [{
        "axisAlpha": 0,
        "position": "left"
      }],
      "graphs": [{
        "id":"g1",
        "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        "bullet": "round",
        "bulletSize": 8,
        "lineColor": "#d1655d",
        "lineThickness": 2,
        "negativeLineColor": "#637bb6",
        "type": "smoothedLine",
        "valueField": "value"
      }],
      "categoryField": "time",
      "categoryAxis": {
        "minorGridAlpha": 0.1,
        "minorGridEnabled": true
      },
    }
  }

  tb() {
    this.visible=true;
  }

  onClick() {
    this.c='c';
    // console.log(this.lineChartData);
    for(var i=0;i<this.articles.length;i++)
    {
      // this.ChartTime[i] = -(this.articles[0]._endTime - this.articles[i]._endTime)/100;
      this.chartConfig.dataSets[0].dataProvider.push({
        "time":new Date(this.articles[i]._endTime*1000),
        "value":this.articles[i]._initBytes
      })
    }
    this.chart = this.AmCharts.makeChart("chartdiv", this.chartConfig)
    console.log(this.chartConfig.dataSets[0].dataProvider);
    return false;
  }

  completed() {
    console.log(this.articles)
    console.log(this.chartConfig)
  //    this.visibility.emit(this.visible);
  //   this.visible=true;
  //   for(var i=0;i<this.articles.length;i++)
  //   {
  //     this.lineChartData[0].data[i] = this.articles[i]._acrBlocked;
  //     this.lineChartData[0].label = 'acr Blocked';
  //     this.lineChartData[1].data[i] = this.articles[i]._initBytes/1000;
  //     this.lineChartData[1].label = 'init Bytes';
  //     this.lineChartData[2].data[i] = this.articles[i]._respBytes/10000;
  //     this.lineChartData[2].label = 'resp Bytes';
  //   }
  }

  // public chartClicked(e:any):void {
  //   console.log(e);
  // }
 
  // public chartHovered(e:any):void {
  //   console.log(e);
  // }
  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
  }

}
