import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GmapsModule, gmapsKey } from '@angeeks/gmaps';
import { GtagModule, GtagID } from '@angeeks/gtag';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    GmapsModule,
    GtagModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: gmapsKey, useValue: 'AIzaSyAWgz2LVvH-g1oMrNpCeiOHa_fzfgL6HUc' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
