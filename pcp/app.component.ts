import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PCP';
  sSize = new PSize(false, 3, 3);
  xPanel = new XPanel();
  xPanelState = false;
  menuIsActive = false;
  submenuIsActive = false;
  mainManuBar = new Array<Box>();
  mainToolBar = new Array<ToolBox>();

  constructor() {

    this.mainManuBar.push(
      new Box(false, 0, 'Plik',
        [
          new SubBox(true, false, false, false, 0, 0, 'Definiuj_szablon', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Otwórz_szablon', 'Ctrl+O', [null]),
          new SubBox(false, false, false, false, 0, 0, 'Zachowaj_szablon', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zachowaj_szablon_jako', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zamknij_szablon', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Otwórz_krzyżówkę', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zachowaj_krzyżówkę', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zachowaj_krzyżówkę_jako', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zamknij_krzyżówkę', '', [null]),
          new SubBox(true, false, false, true, 1, 150, 'Importuj_krzyżówkę', '',
            [
              new SSubBox(true, false, false, 0, 260, -24, 'Format_PUZ')
            ]),
          new SubBox(false, false, false, false, 1, 150, 'Eksportuj_krzyżówkę', '',
            [
              new SSubBox(true, false, false, 0, 260, -24, 'Format_HTML'),
              new SSubBox(true, false, false, 0, 260, -1, 'Format_XML')
            ]),
          new SubBox(true, false, false, true, 0, 0, 'Koniec', '', [null])
        ]
      ),
      new Box(false, 40, 'Edycja',
        [
          new SubBox(true, false, false, false, 0, 0, 'Importuj_klucze', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Opis_POZIOMO', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Opis_PIONOMO', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Wstaw_obraz ', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Definuj_hasło', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Zamknij_hasło', '', [null])
        ]
      ),
      new Box(false, 105, 'Słownik',
        [
          new SubBox(true, false, false, false, 0, 0, 'Uporządkuj_słownik', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Dodaj_do_słownika', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Przeszukaj_krzyżówkę', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Wyszukaj_słowo', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Wykasuj_słowo', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Anagram', '', [null])
        ]
      ),
      new Box(false, 185, 'Opcje',
        [
          new SubBox(true, false, false, false, 0, 0, 'Język', '', [null]),
          new SubBox(true, false, false, false, 1, 170, 'Styl', '',
            [
              new SSubBox(true, false, false, 0, 115, -24, 'Układ_NYT'),
              new SSubBox(true, true, false, 0, 115, -1, 'Układ_Angory')
            ]),
          new SubBox(true, false, false, false, 0, 0, 'Ustawienia', '', [null])
        ]
      ),
      new Box(false, 245, 'Narzędzia',
        [
          new SubBox(true, false, false, false, 0, 0, 'Wirtualna_klawiatura', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Statystyka', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Uzupełnij', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Wyszukaj_pasujące_hasła', '', [null]),
          new SubBox(true, false, false, true, 0, 0, 'Resetuj_krzyżówkę', '', [null])
        ]
      ),
      new Box(false, 345, 'Rozwiązanie',
        [
          new SubBox(true, false, false, false, 1, 210, 'Sprawdź', '',
            [
              new SSubBox(true, false, false, 0, 185, -24, 'Bieżącą_literę'),
              new SSubBox(true, false, false, 0, 185, -1, 'Zaznaczony_wyraz'),
              new SSubBox(true, false, false, 0, 185, 22, 'Wszystkie_litery')
            ]),
          new SubBox(true, false, false, false, 1, 240, 'Odsłoń', '',
            [
              new SSubBox(true, false, false, 0, 185, -24, 'Bieżącą_literę'),
              new SSubBox(true, false, false, 0, 185, -1, 'Zaznaczony_wyraz'),
              new SSubBox(true, false, false, 0, 185, 22, 'Błędne_litery'),
              new SSubBox(true, false, false, 0, 185, 45, 'Kompletne_rozwiązanie')
            ]),
          new SubBox(true, false, false, true, 0, 0, 'Nieuporządkowane', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Uprządkowane', '', [null])

        ]
      ),
      new Box(false, 465, 'Pomoc',
        [
          new SubBox(true, false, false, false, 0, 0, 'Dokumentacja', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'Licencja', '', [null]),
          new SubBox(true, false, false, false, 0, 0, 'O_programie', '', [null])
        ]
      )
    );

    this.mainToolBar.push(
      new ToolBox(true, false, 'exit', 'exit.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'define_pattern', 'define_pattern.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'open_pattern', 'open_pattern.png'),
      new ToolBox(true, false, 'diskette2', 'diskette2.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'open_folder', 'open_folder.png'),
      new ToolBox(true, false, 'diskette1', 'diskette1.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'start', 'start.png'),
      new ToolBox(true, false, 'sort', 'sort.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'search', 'search.png'),
       new ToolBox(true, false, 'cut', 'cut.png'),
      new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'tools', 'tools.png'),
      new ToolBox(true, false, 'wintext', 'wintext.png'),
        new ToolBox(false, false, 'separator', 'separator.png'),
      new ToolBox(true, false, 'info', 'info.png'),
      new ToolBox(false, false, 'default_language', 'default_language.png'),
      new ToolBox(true, false, 'help', 'help.png')
    );
  }

  createXrossWord(xy: Array<number>) {
    const xPanelArea = Array<XSquare>();
    // const kratka = ;
    for (let k = 0; k < (xy[0] + 1) * (xy[1] + 1); k++) {
      const m = (Number) (k / 12 - (k % 12) / 12);
      xPanelArea.push(new XSquare(0, 30, 30, true, false, false, (k % 12) * m + ''));
    }
    this.xPanel = new XPanel(xy[0], xy[1], false,
      xPanelArea, new Array<string>(), new Array<string>());
    console.log(xy[0] + xy[1]);
    console.log(xPanelArea);
    this.xPanelState = true;
    console.log(this.xPanelState);
  }

  closeMyMenu(ids: Array<number>) {
    const c = this.mainManuBar[ids[0]];
    // console.log(ids[0] + ':' + ids[1] + ' menu:item ' + c.mPullDown + '-' + c.subItems[ids[1]] + ' aktywny' + this.menuIsActive);
    console.log(ids[0] + ':' + ids[1] + ' ' + c.subItems[ids[1]].mSubItem);
  }
  closeMySubMenu(ids: Array<number>) {
    const c = this.mainManuBar[ids[0]];
    console.log(ids[0] + ':' + ids[1] + '-' + ids[2] + ' ' + c.subItems[ids[1]].sSubItems[ids[2]].uSubItem);

    c.subItems[ids[1]].sPullDown = false;
    this.submenuIsActive = false;
  }

  keepMySubmenu(ids: Array<number>) {
    const c = this.mainManuBar[ids[0]];
    console.log(ids[0] + ':' + ids[1] + ' ' + c.subItems[ids[1]].mSubItem);

    if (!c.subItems[ids[1]].sPullDown) {
      for (let i = 0; i < c.subItems.length; i++) {
        if (i !== ids[1]) { c.subItems[i].sPullDown = false; }
        if (i === ids[1]) { c.subItems[i].sPullDown = true; }
      }
    }
  }

  selectSSubMenu(ids: Array<number>) {
    const c = this.mainManuBar[ids[0]];
    console.log(ids[0] + ':' + ids[1] + ' ' + c.subItems[ids[1]].mSubItem);

    c.subItems[ids[1]].sPullDown = !c.subItems[ids[1]].sPullDown;
  }


  closeOtherSubMenus(ids: Array<number>) {
    const c = this.mainManuBar[ids[0]];
    console.log(ids[0] + '::' + ids[1] + '--' + c.subItems[ids[1]].mSubItem);

    for (let i = 0; i < c.subItems.length; i++) {
      if ((c.subItems[i].sType === 1)) {
        c.subItems[i].sPullDown = false;
      }
    }
  }

  closeOtherMenus(id: number) {
    // console.log(id + '  close other menus ' + this.mainManuBar[id].mPullDown + ' aktywny ' + this.menuIsActive);

    if ((!this.mainManuBar[id].mPullDown) && (this.menuIsActive)) {
      for (let i = 0; i < this.mainManuBar.length; i++) {
        if (i !== id) { this.mainManuBar[i].mPullDown = false; }
        if (i === id) { this.mainManuBar[i].mPullDown = true; }
      }
    }
  }

  selectSubMenu(id: number) {
    this.mainManuBar[id].mPullDown = !this.mainManuBar[id].mPullDown;
    this.menuIsActive = this.mainManuBar[id].mPullDown;

    // console.log(id + '  select sub ' + this.mainManuBar[id].mPullDown + ' aktywny' + this.menuIsActive);
  }

  runTool(tool: string) {
    console.log(tool);
  }
}

class Dog {
  constructor(public name: string, public age: number) {
  }
}

class Box {
  constructor(public mPullDown: boolean, public mItemOffset: number, public mItem: string, public subItems: Array<SubBox>) {
    // for (let i = 0; i < subItems.length; i++) {  console.log(':' + subItems[i].length); }
  }
}

class SubBox {
  constructor(public sEnabled: boolean, public sChecked: boolean, public sPullDown: boolean,
    public sSeparator: boolean, public sType: number,
    public sSubItemsWidth: number, public mSubItem: string, public mShortCut: string, public sSubItems: Array<SSubBox>) {

     // for (let i = 0; i < sSubItems.length; i++) {  console.log(':' + sSubItems[i].length); }
  }
}

class SSubBox {
  constructor(public uEnabled: boolean, public uChecked: boolean, public uSeparator: boolean,
    public uType: number, public sSubLeftOffset: number, public sSubTopOffset: number, public uSubItem: string) {
    // for (let i = 0; i < sSubItems.length; i++) {  console.log(':' + sSubItems[i].length); }
  }
}

class ToolBox {
  constructor(public isEnabled: boolean, public inUse: boolean, public tItem: string, public tIcon: string) {
    // for (let i = 0; i < subItems.length; i++) {  console.log(':' + subItems[i].length); }
  }
}

class PSize {
  constructor( public sState: boolean, public sHor: number, public sVer: number) {
  }
}

class XPanel {
  constructor(public pHor?: number, public pVer?: number, public pState?: boolean,
    public pPanel?: Array<XSquare>, public pKeyHor?: Array<string>, public pKeyVer?: Array<string>) {
  }
}

class XSquare {
  constructor(public xType: number, public xWidth: number, public xHeight: number,
    public isEnabled: boolean, isSelected: boolean, public xState: boolean, public xChar: string) {

  }
}


