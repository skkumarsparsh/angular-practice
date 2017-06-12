import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Arr } from './../multiple/arr.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input() names: Arr[];
  @Input() getcount:number;
  @Output() countDown = new EventEmitter();

  onClick2(name: Arr) {
    for(var i = this.names.length - 1; i >= 0; i--) {
      if(this.getcount==0)
      {
        alert('No elements');
        return false;
      }
      if(this.names[i] === name) {
         this.names.splice(i, 1);
      }
    }
    this.countDown.emit();
  }

  constructor() { }

  ngOnInit() { }

}
