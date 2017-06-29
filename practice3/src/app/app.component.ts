import { Component } from '@angular/core';
import { AmChartsService } from "@amcharts/amcharts3-angular";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private chart:any;
  private chart2:any;
  
  constructor(private AmCharts: AmChartsService) {}

  ngOnInit() {
    this.chart = this.AmCharts.makeChart("chartdiv", {
    "type": "serial",
    "theme": "light",
    marginTop:5,
    marginBottom:0,
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
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "axisAlpha": 0,
        "fontSize": 10,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left",
    }],
    "listener":[],
    "startDuration": 0.5,
    "graphs": [{
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
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false,
        "categoryBalloonEnabled":false
    },
    "categoryField": "year",
    "categoryAxis": {
      "labelsEnabled":false,
      "balloon":{
        "enabled": false
      }
    },
  });

  this.chart2 = this.AmCharts.makeChart("chartdiv2", {
    "type": "serial",
    "theme": "light",
    autoMargins:false,
    marginTop:-1,
    marginBottom:4,
    "legend": {
        "useGraphSettings": true,
        "enabled":false
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
    "valueAxes": [{
        "integersOnly": true,
        "maximum": 6,
        "minimum": 1,
        "reversed": true,
        "axisAlpha": 0,
        "fontSize": 10,
        // "showFirstLabel": false,
        "dashLength": 5,
        "gridCount": 10,
        "position": "left"
    }],
    "listener":[],
    "startDuration": 0.5,
    "graphs": [{
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
    }],
    "chartCursor": {
        "cursorAlpha": 0,
        "zoomable": false,
        "categoryBalloonEnabled":false
    },
    "categoryField": "year",
    "categoryAxis": {
      "labelsEnabled":false,
      "position":top
    },
    "export": {
    	"enabled": true,
        "position": "bottom-right"
     }
});

//    document.getElementById("chartdiv").addListener( "rollOverGraphItem", function( event ) {
//     this.chart2.chartCursor.showCursorAt( event.dataItem.dataContext );
//     console.log(event.dataItem.dataContext)
//     } );

//     this.chart2.addListener( "rollOverGraphItem", function( event ) {
//     this.chart.chartCursor.showCursorAt(event.dataItem.dataContext.italy );
//     console.log(event.dataItem.dataContext)
//     } );


  }

  ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);    
    this.AmCharts.destroyChart(this.chart2);
  }

}
