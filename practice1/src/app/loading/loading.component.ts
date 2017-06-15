import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  l:string = '1';
  @Input() visible:boolean;
  @Output() tablevisible = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit(){
    document.getElementById("overlay").style.display = "block";
  }

  onClick2() {
    this.tablevisible.emit();
  }

  onClick(l: string) {
    this.l = l;
  }

}
