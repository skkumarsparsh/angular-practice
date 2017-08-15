import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UtilsService {

  title: string;
  titleChanged = new EventEmitter<any>();
  notificationAdded = new EventEmitter<any>();
  loaded = new EventEmitter<any>();
  coreMetrics = ["Sales No", "New Customer No", "Real Misses No"];
  months = ["Jan-17", "Feb-17", "Mar-17"];
  firstLoad = true;
  firstLoad2 = true;
  firstLoad3 = true;
  coreMetricsChanged = new EventEmitter<any>();

  constructor() {
    this.title = "Dashboard";
  }

  getAgents(data) {
    let agents = [];
    let k = 0;
    for (var i in data) {
      agents[k++] = i;
    }
    return agents;
  }

  getHeaderNames(data, agents = this.getAgents(data)) {
    let headers = [];
    let k = 0;
    data = data[agents[0]];
    while (Object.keys(data)[k]) {
      headers[k] = Object.keys(data)[k];
      k++;
    }
    return headers;
  }

  getValuesForMonthsOfEachData(data) {
    let monthValues = [];
    let k = 0;
    for (var i in data) {
      monthValues[k++] = data[i];
    }
    return monthValues;
  }

}
