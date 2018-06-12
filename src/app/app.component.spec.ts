import { ComponentSuite as Component } from '@angeeks/testing';

import { LayoutDataApi } from '@angeeks/gh-layout';
import { LayoutDataApi as MockApi } from '@angeeks/gh-layout/testing';
import { GlobalsModule } from '@angeeks/globals';
import { GtagModule } from '@angeeks/gtag';
import { AppComponent as Tag } from './app.component';

Component.suite(Tag, (spec) => {
  spec.init({
    imports: [
      GtagModule,
      GlobalsModule
    ],
    providers: [
      { provide: LayoutDataApi, useClass: MockApi }
    ]
  });
  spec.expectProperty('title', 'gmaps');
});
