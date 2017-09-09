import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class UtilsService {

  title: string;
  titleChanged = new EventEmitter<any>();
  notificationAdded = new EventEmitter<any>();
  loaded = new EventEmitter<any>();
  goalsChanged = new EventEmitter<any>();
  checkboxesChanged = new EventEmitter<any>();
  coreMetrics = ["Sales No", "New Customer No", "Real Misses No"];
  months = ["Jan-17", "Feb-17", "Mar-17"];
  firstLoad = true;
  firstLoad2 = true;
  firstLoad3 = true;
  firstLoad4 = true;
  checked = false;
  url = "http://localhost:8000/data.json";
  coreMetricsChanged = new EventEmitter<any>();
  slidetoggle = new EventEmitter<any>();
  goals = {
    "Agencies No":15,
    "Customer No":2500,
    "New Customer No":30,
    "Paid Up No":110,
    "Sales No":35,
    "Sales Value":100000.0,
    "Parallel No":5,
    "Refinance No":10,
    "Real Misses No":950,
    "Recent New Customers No 13 Weeks":700,
    "Consecutive Misses 1":350,
    "Scheduled Visit No":250
  }
  data1 = [];
  data2 = [];
  data3 = [];
  data4 = [];
  comparecheckboxes = [];

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
