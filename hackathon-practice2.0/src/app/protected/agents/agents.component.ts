import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent implements OnInit {

  constructor(private utils:UtilsService) { 
    this.utils.loaded.emit(true);
    this.utils.titleChanged.emit("Individual Agents");
  }

  ngOnInit() {
  }

}
