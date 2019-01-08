import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  @Input()
  mMainMenuItems;

  @Input()
  dDrawMainMenu;

  @Input()
  dDrawSubMenu;

  @Output()
  eventMainMenu = new EventEmitter<string>();

  @Output()
  eventCloseOtherBoxes = new EventEmitter<number>();

  @Output()
  eventcloseOtherSubMenus = new EventEmitter<Array<number>>();

  @Output()
  eventCloseMyBox = new EventEmitter<Array<number>>();

  @Output()
  eventSubMenu = new EventEmitter<Array<number>>();

  @Output()
  eventKeepMyBox = new EventEmitter<Array<number>>();

  @Output()
  eventCloseSubBox = new EventEmitter<Array<number>>();

  constructor() {
  }

  ngOnInit() {
    // console.log('Komponent gotowy!');
  }


  selectMainMenu(boxId) {
    this.eventMainMenu.emit(boxId);
  }

  closeOtherBoxes(boxId) {
    this.eventCloseOtherBoxes.emit(boxId);
  }

  closeOtherSubMenus([boxId, itemId]) {
    this.eventcloseOtherSubMenus.emit([boxId, itemId]);
  }

  closeMyBox([boxId, itemId]) {
    this.eventCloseMyBox.emit([boxId, itemId]);
  }

  selectSubMenu([boxId, itemId]) {
    this.eventSubMenu.emit([boxId, itemId]);
  }

  keepMyBox([boxId, itemId]) {
    this.eventKeepMyBox.emit([boxId, itemId]);
   // console.log(boxId + ':' + itemId);
  }

  closeSubBox([boxId, itemId, subId]) {
    this.eventCloseSubBox.emit([boxId, itemId, subId]);
   // console.log(boxId + ':' + itemId + ':' + subId);
  }

  adPx(offset) {
    const w = offset + 'px';
    return w;
  }
}
