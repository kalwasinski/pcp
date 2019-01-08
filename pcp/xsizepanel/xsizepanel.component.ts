import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-xsizepanel',
  templateUrl: './xsizepanel.component.html',
  styleUrls: ['./xsizepanel.component.css']
})
export class XsizepanelComponent implements OnInit {

  @Input()
  sXSize;

  @Output()
  eventCreateXWord = new EventEmitter<Array<number>>();

  constructor() { }

  ngOnInit() {
         console.log('xsize gotowy!');
  }

  createXWord([x, y]) {
    this.eventCreateXWord.emit([x, y]);
 }
}
