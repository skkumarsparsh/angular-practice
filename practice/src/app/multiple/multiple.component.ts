import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Arr } from './arr.model';

@Component({
  selector: 'app-multiple',
  templateUrl: './multiple.component.html',
  styleUrls: ['./multiple.component.css']
})
export class MultipleComponent implements OnInit {
  names: Arr[];
  @Output() countUp = new EventEmitter();
  @Output() ns = new EventEmitter<Arr[]>();

  onClick1(n: HTMLInputElement, link: HTMLInputElement): boolean {
    if(this.names.length!=0)
    {
      for(var i = this.names.length - 1; i >= 0; i--)
      {
        if(this.names[i].name == n.value)
        {
          alert('This element is already present!');
          n.value='';
          link.value='';
          return false;
        }
      }
    }

    this.names.push(new Arr(n.value,"http://"+link.value));
    this.countUp.emit();
    this.ns.emit(this.names);
    n.value='';
    link.value='';
    return false;
  }

  constructor() {
    this.names = []
    this.ns.emit(this.names);
  }

  ngOnInit() {
  }

}
