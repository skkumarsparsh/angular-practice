import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  title: string;

  constructor() {
    this.title = "Lead Agent Dashboard";
  }

}
