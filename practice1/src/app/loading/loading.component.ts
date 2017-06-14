import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  l:string = 'a';

  constructor() {
  }

  ngOnInit() {
  }

  onClick(l: string) {
    this.l = l;
  }

}
