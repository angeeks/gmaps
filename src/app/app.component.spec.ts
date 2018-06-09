import { ComponentSuite as Component } from '@angeeks/testing';

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
    ]
  });
  spec.expectProperty('title', 'ngk');
});
