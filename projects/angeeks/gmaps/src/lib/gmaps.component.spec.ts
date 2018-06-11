import { inject, fakeAsync } from '@angular/core/testing';
import { ComponentSuite as Suite } from '@angeeks/testing';

import { Gmaps } from './gmaps';
import { GmapsComponent as Tag } from './gmaps.component';

Suite.on<Tag>(Tag, (spec) => {
  spec.init({});
  spec.expectProperty('options', {});
  spec.expectProperty('map', undefined);
  describe('when gmaps.event$ emit with type: "loaded"', () => {
    let gmaps;
    beforeEach(inject([Gmaps], fakeAsync((g) => {
      gmaps = g;
      g.event$.next({ type: 'loaded', google: 'test' });
    })));
    it('should update subject.map', () => {
      expect(spec.subject.map).toEqual('test');
    });
  });
  describe('.ngOnInit()', () => {
    let gmaps;
    beforeEach(inject([Gmaps], (g) => {
      gmaps = g;
      spyOn(g, 'create').and.callFake(() => { });
      spec.subject.ngOnInit();
    }));
    it('call gmaps.create', () => {
      expect(gmaps.create).toHaveBeenCalled();
    });
  });
  describe('.ngOnChanges()', () => {
    const map = { setOptions() { } };
    beforeEach(() => {
      spyOn(map, 'setOptions').and.callThrough();
      spec.subject.map = map;
    });
    describe('when .map is defined', () => {
      beforeEach(() => {
        const options = { center: true };
        spec.subject.options = options;
        spec.subject.ngOnChanges({ options });
      });
      it('call gmaps.create', () => {
        expect(map.setOptions).toHaveBeenCalled();
      });
    });
    describe('when .map is undefined', () => {
      beforeEach(() => {
        spec.subject.map = undefined;
        spec.subject.ngOnChanges({ options: {} });
      });
      it('not call map.setOptions', () => {
        expect(map.setOptions).not.toHaveBeenCalled();
      });
    });
    describe('when e.options is undefined', () => {
      beforeEach(() => {
        spec.subject.ngOnChanges({});
      });
      it('not call map.setOptions', () => {
        expect(map.setOptions).not.toHaveBeenCalled();
      });
    });
  });
});
