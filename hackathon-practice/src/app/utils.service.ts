import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class UtilsService {

  title: string;
  titleChanged = new EventEmitter<any>();

  constructor() {
    this.title = "Lead Agent Dashboard";
  }

}
