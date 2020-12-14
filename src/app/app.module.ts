import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ContactsTopBarComponent } from './contacts-top-bar/contacts-top-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ContactsTopBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
