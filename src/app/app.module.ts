import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GlobalsModule } from '@angeeks/globals';
import { GtagModule, GtagID } from '@angeeks/gtag';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    GlobalsModule,
    GtagModule,
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
