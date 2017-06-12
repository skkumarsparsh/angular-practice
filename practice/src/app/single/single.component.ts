import { Component, OnInit,Input } from '@angular/core';
import { Arr } from './../multiple/arr.model';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  @Input() arr: Arr;

  constructor() { }

  ngOnInit() { }

}
