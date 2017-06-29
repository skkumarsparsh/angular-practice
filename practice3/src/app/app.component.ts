import { Component } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chart:any;
  chartConfig:any;
  chartData1:any;
  chartData2:any;
  private chart2:any;
  
  constructor(private AmCharts: AmChartsService) {}

  commonChartPart():any {
    return({
        "type": "serial",
        "theme": "light",
        autoMargins:false,
        "legend": {
            "enabled": false
        },
        "dataProvider": [{
            "year": 1930,
            "italy": 1,
            "germany": 5,
            "uk": 3
        }, {
            "year": 1934,
            "italy": 1,
            "germany": 2,
            "uk": 6
        }, {
            "year": 1938,
            "italy": 2,
            "germany": 3,
            "uk": 1
        }, {
            "year": 1950,
            "italy": 3,
            "germany": 4,
            "uk": 1
        }, {
            "year": 1954,
            "italy": 5,
            "germany": 1,
            "uk": 2
        }, {
            "year": 1958,
            "italy": 3,
            "germany": 2,
            "uk": 1
        }, {
            "year": 1962,
            "italy": 1,
            "germany": 2,
            "uk": 3
        }, {
            "year": 1966,
            "italy": 2,
            "germany": 1,
            "uk": 5
        }, {
            "year": 1970,
            "italy": 3,
            "germany": 5,
            "uk": 2
        }, {
            "year": 1974,
            "italy": 4,
            "germany": 3,
            "uk": 6
        }, {
            "year": 1978,
            "italy": 1,
            "germany": 2,
            "uk": 4
        }],
        "valueAxes": [],
        "startDuration": 0.5,
        "graphs": [],
        "chartCursor": {
            "cursorAlpha": 0,
            "zoomable": false,
            "categoryBalloonEnabled":false
        },
        "categoryField": "year",
        "categoryAxis": {},
    })
  }

  ngOnInit() {
    this.chartData1 = new Object(this.commonChartPart());
    this.chartData1.graphs.push({
        "balloonText": "place taken by Italy in [[category]]: [[value]]",
        "bullet": "round",
        "hidden": true,
        "title": "Italy",
        "valueField": "italy",
		    "fillAlphas": 0
    }, {
        "balloonText": "place taken by Germany in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Germany",
        "hidden": true,
        "valueField": "germany",
		    "fillAlphas": 0
    }, {
        "balloonText": "place taken by UK in [[category]]: [[value]]",
        "bullet": "round",
        "type":"column",
        "title": "United Kingdom",
        "valueField": "uk",
		    "fillAlphas": 0.2
    })
    this.chartData1.marginTop=5;
    this.chartData1.marginBottom=0;

    this.chartData1.valueAxes.push({
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "axisAlpha": 0,
        "fontSize": 10,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
    })

    this.chartData1.categoryAxis = {
      "labelsEnabled":false,
    }


    this.chart = this.AmCharts.makeChart("chartdiv", this.chartData1);

    this.chartData2 = new Object(this.commonChartPart());
    this.chartData2.graphs.push({
        "balloonText": "place taken by Italy in [[category]]: [[value]]",
        "bullet": "round",
        "hidden": true,
        "title": "Italy",
        "valueField": "italy",
		    "fillAlphas": 0
    }, {
        "balloonText": "place taken by Germany in [[category]]: [[value]]",
        "bullet": "round",
        "title": "Germany",
        "type": "column",
        "valueField": "germany",
		    "fillAlphas": 0.2
    }, {
        "balloonText": "place taken by UK in [[category]]: [[value]]",
        "bullet": "round",
        "title": "United Kingdom",
        "hidden": true,
        "valueField": "uk",
		    "fillAlphas": 0
    })

    this.chartData2.marginTop = -1
    this.chartData2.marginBottom = 4

    this.chartData2.valueAxes.push({
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "reversed": true,
        "axisAlpha": 0,
        "fontSize": 10,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left"
    })
    this.chartData2.categoryAxis = {
      "labelsEnabled":false,
      "position":"top"
    }


  this.chart2 = this.AmCharts.makeChart("chartdiv2", this.chartData2);
  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);    
    this.AmCharts.destroyChart(this.chart2);
  }

}