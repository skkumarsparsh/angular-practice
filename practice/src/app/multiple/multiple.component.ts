import { Component, OnInit } from '@angular/core';
import { Arr } from './arr.model';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  names: Arr[];

  onClick(n: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`${n.value}, ${link.value}`);
    this.names.push(new Arr(n.value,"http://"+link.value));
    n.value='';
    link.value='';
    return false;
  }

  constructor() {
    this.names = [new Arr("test1","http://www.google.com"),
                  new Arr("test2","http://www.bing.com")
                ]
  }

  ngOnInit() {
  }

}
