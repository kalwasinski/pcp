import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  @Input()
  tToolBoxItems;

  @Output()
  eventToolIcon = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  selectToolBox(toolId) {
    this.eventToolIcon.emit(toolId);
    console.log(toolId);
  }
}
