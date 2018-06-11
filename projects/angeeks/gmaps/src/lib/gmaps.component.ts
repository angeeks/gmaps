import { OnInit, OnChanges, Input,
  ElementRef, ViewChild, Component } from '@angular/core';
import { Gmaps } from './gmaps';

@Component({
  selector: 'ngk-gmaps',
  template: `<div #mapRef style='height: 100%'></div>`,
  styles: [`
  :host {
    display: block;
  }
  `]
})
export class GmapsComponent implements OnChanges, OnInit {
  @ViewChild('mapRef', { read: ElementRef }) mapRef: ElementRef;
  @Input() options = {};
  map: any;

  constructor(private gmaps: Gmaps) {
    gmaps.event$.subscribe(({ type, google }) => {
      if (type === 'loaded') {
        this.map = google;
      }
    });
  }

  ngOnInit() {
    this.gmaps.create(this.mapRef.nativeElement, this.options);
  }

  ngOnChanges(e) {
    if (e.options && this.map) {
      this.map.setOptions(this.options || {});
    }
  }
}
