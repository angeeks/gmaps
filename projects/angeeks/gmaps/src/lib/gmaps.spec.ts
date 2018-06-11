import { ProviderSuite as Suite } from '@angeeks/testing';
import { Subject } from 'rxjs';

import { Gmaps as Foo } from './gmaps';

Suite.on<Foo>(Foo, (spec) => {
  spec.init();
  it('has event$ subject', () => {
    expect(spec.subject.event$).toEqual(jasmine.any(Subject));
  });
  // TODO complete tests
});
