import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {

  constructor(private utils:UtilsService) { 
    this.utils.titleChanged.emit("Individual Metrics");
  }

  ngOnInit() {
  }

}
