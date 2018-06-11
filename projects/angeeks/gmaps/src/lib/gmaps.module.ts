import { NgModule } from '@angular/core';

import { Gmaps } from './gmaps';
import { GmapsComponent } from './gmaps.component';

@NgModule({
  providers: [
    Gmaps
  ],
  declarations: [GmapsComponent],
  exports: [GmapsComponent]
})
export class GmapsModule { }
