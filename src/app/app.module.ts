import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MdModule } from '@angeeks/md';
import { GhLayoutModule } from '@angeeks/gh-layout';
import { GmapsModule, gmapsKey } from '@angeeks/gmaps';
import { GtagModule, GtagID } from '@angeeks/gtag';

import { AppComponent } from './app.component';
import { environment as env } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    MdModule,
    GhLayoutModule,
    GmapsModule,
    GtagModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: GtagID, useValue: env.gtag },
    { provide: gmapsKey, useValue: env.gmap }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
