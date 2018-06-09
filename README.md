# Gmaps

Simply a googlemaps `api wrapper` for Angular.

```
npm i -P @angeeks/map
```

# Usages

## setup

```diff
+ import { GmapsModule } from '@angeeks/gmaps';

@NgModule({
  imports: [
+    GmapsModule
  ]
})
export class AppComponent {}
```

```diff
// component.html
+ <ngk-gmaps #gmaps></ngk-gmaps>

// component.ts
import { GmapsComponent } from '@angeeks/gmaps';
export class AppComponent {
  @ViewChild(GmapsComponent) gmaps: GmapsComponent;
  test() {
    // google maps api is availabled as a member of the instance:
    console.log(gmaps.api);
  }
}
```
