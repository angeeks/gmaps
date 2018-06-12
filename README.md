# @angeeks/gmaps

[![Build Status](https://travis-ci.org/angeeks/gmaps.svg?branch=master)](https://travis-ci.org/angeeks/gmaps)
[![npm version](https://badge.fury.io/js/%40angeeks%2Fgmaps.svg)](https://www.npmjs.com/package/@angeeks/gmaps)

[Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial) + Angula

```
npm i -P @angeeks/gmaps
```

# Usages

## setup

```diff
+ import { GmapsModule, gmapsKey } from '@angeeks/gmaps';

@NgModule({
  imports: [
+    GmapsModule
  ],
  providers: [
+   { provide: gmapsKey, useValue: 'your-key' }
  ]
})
export class AppComponent {}
```

```diff
// component.html
+ <ngk-gmaps [options]='options'></ngk-gmaps>

// component.ts
+ import { GmapsComponent } from '@angeeks/gmaps';
export class AppComponent {
+ options = { center: { lat: 0, lng: 0 }, zoom: 10 };
}
```

```diff
// component.scss
:host {
  ngk-gmaps {
    height: 400px;
    width: 400px;
  }
}
```
