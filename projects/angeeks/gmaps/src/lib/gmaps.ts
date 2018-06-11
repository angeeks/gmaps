import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { gmapsKey, gmapsLoader } from './gmaps.lib';

@Injectable({
  providedIn: 'root'
})
export class Gmaps {
  event$ = new Subject();
  constructor(
    @Inject(gmapsKey) private key: string,
    @Inject(gmapsLoader) private loader) {
    loader.onLoad((google) => {
      const type = 'loaded';
      this.event$.next({ type, google });
    });
  }
  create(el, options = {}) {
    this.loader.KEY = this.key;
    this.loader.load((g) => {
      return new g.maps.Map(el, options);
    });
  }
}
