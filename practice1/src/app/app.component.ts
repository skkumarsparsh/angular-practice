import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { jsonModel } from './json.model';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})

export class AppComponent {
  articles: jsonModel[];
  errorMessage: string;
  l: string;
  c: string;
  public lineChartData:Array<any> = [
    {data: [], label: 'Series A'}
  ];
  lineChartTime:number[];
  public lineChartOptions:any = {
    responsive: true,
    scales: {
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
    }
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  constructor(private _articleService: ArticleService) {
    this.articles = [];
    this.l = "loading";
    this.lineChartData = [{data:[], label:"t"},{data:[], label:"t"},{data:[], label:"t"}];
    this.lineChartTime = [];
    this.c = "nc";
  }

  ngOnInit():void {
    let self = this;
    self._articleService.getArticles().subscribe(response => this.articles = response, error => this.errorMessage = < any > error, () => this.completed())
  }

  onClick() {
    this.c="c";
    console.log(this.lineChartData);
    for(var i=0;i<this.articles.length;i++)
    {
      this.lineChartTime[i] = -(this.articles[0]._endTime - this.articles[i]._endTime)/100;
    }
    console.log(this.lineChartTime);
    return false;
  }

  completed() {
    this.l="random";
    for(var i=0;i<this.articles.length;i++)
    {
      this.lineChartData[0].data[i] = this.articles[i]._acrBlocked;
      this.lineChartData[0].label = 'acr Blocked';
      this.lineChartData[1].data[i] = this.articles[i]._initBytes;
      this.lineChartData[1].label = 'init Bytes';
      this.lineChartData[2].data[i] = this.articles[i]._respBytes;
      this.lineChartData[2].label = 'resp Bytes';
    }
  }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

}
