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

  onClick2(name: Arr) {
    for(var i = this.names.length - 1; i >= 0; i--) {
      if(this.count==0)
      {
        alert('No elements');
        return false;
      }
      if(this.names[i] === name) {
         this.names.splice(i, 1);
      }
    }
    this.count -= 1;
  }

  constructor() {
    this.names = []
  }

  ngOnInit() {
  }

}
