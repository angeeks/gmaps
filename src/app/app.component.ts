import { Component, ViewChild } from '@angular/core';
import { Gtag } from '@angeeks/gtag';
import { LayoutData } from '@angeeks/gh-layout';

@Component({
  selector: 'ngk-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngk';
  desc = '';
  md = '';
  mapsCfg = {
    center: {lat: -34.397, lng: 150.644},
    zoom: 9
  };
  constructor(
    layout: LayoutData,
    gtag: Gtag) {
    gtag.event('page_view', { loaded: true, project: '@angeeks/gmaps' });
    layout.init({ name: 'gmaps' });
    layout.repo.subscribe(({ full_name, description }: any) => {
      this.title = full_name;
      this.desc = description;
    });
    layout.readme.subscribe(md => {
      this.md = md;
    });
  }
}
