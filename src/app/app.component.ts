import { Component, ViewChild } from '@angular/core';
import { Gtag } from '@angeeks/gtag';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  mapsCfg = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 9
  };
  constructor(gtag: Gtag) {
    gtag.event('page_view', { loaded: true, project: '@angeeks/gmaps' });
  }
}
