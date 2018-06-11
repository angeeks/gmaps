import { InjectionToken } from '@angular/core';
import * as MapsLoader from 'google-maps';

export function gmapsLoaderFactory() {
  return MapsLoader;
}

export const gmapsLoader = new InjectionToken<any>('ngk.gmaps.loader', {
  providedIn: 'root',
  factory: gmapsLoaderFactory
});

export function gmapsKeyFactory() {
  return 'set-gmaps-id-here';
}

export const gmapsKey = new InjectionToken<any>('ngk.gmaps.key', {
  providedIn: 'root',
  factory: gmapsKeyFactory
});
