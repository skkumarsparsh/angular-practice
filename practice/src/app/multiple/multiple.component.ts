import { Component, OnInit,Input} from '@angular/core';
import { Arr } from './arr.model';
import { AppComponent } from './../app.component';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  names: Arr[];
  @Input() count:number;

  onClick1(n: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`${n.value}, ${link.value}`);
    this.names.push(new Arr(n.value,"http://"+link.value));
    this.count += 1;
    n.value='';
    link.value='';
    return false;
  }

  constructor() {
    this.names = []
  }

  ngOnInit() {
  }

}
