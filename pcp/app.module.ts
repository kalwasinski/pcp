import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SubmenuDirective } from './shared/submenu.directive';
import { CheckedDirective } from './shared/checked.directive';
import { UncheckedDirective } from './shared/unchecked.directive';
import { XwordpanelComponent } from './xwordpanel/xwordpanel.component';
import { XsizepanelComponent } from './xsizepanel/xsizepanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    SubmenuDirective,
    CheckedDirective,
    UncheckedDirective,
    XwordpanelComponent,
    XsizepanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
