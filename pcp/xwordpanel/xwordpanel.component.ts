import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-xwordpanel',
  templateUrl: './xwordpanel.component.html',
  styleUrls: ['./xwordpanel.component.css']
})


export class XwordpanelComponent implements OnInit {

  @Input()
  sXPanel;

  i: number;
  j: number;

  @Input()
  sXPanelState;

  constructor() { }

  ngOnInit() {
    this.i = this.sXPanel.pVer;
    this.j = this.sXPanel.pHor;
    console.log(this.i + ': :' + this.j);
    console.log(this.sXPanelState);
    console.log(' gotowy word panel');
  }

  iDown() {
    console.log(this.i);
    return this.i--;
  }

  jDown() {
    console.log(this.j);
    return this.j--;
  }

  adPx(offset) {
  const w = offset + 'px';
  return w;
  }
}
