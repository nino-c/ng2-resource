# ng2-resource
Restful resource module for angular2

To use the module install the module using below command

`npm install --save ng2-resource`

import the package using below syntax into your angular 2 app

```javascript
//first import the rest provider
import {RestProvider} from "ng2-resource";
...

//inject rest service provider at app level
bootstrap(Demo,[
  HTTP_PROVIDERS,
  provide(RequestOptions,{useClass:JsonRequest}),
  RestProvider
  ]);
// here you can inject any version of RequestOptions or Http the classes injected before rest provider will be used in the RestProvider

//next implement data sevice provider using below in service file
import {RestProvider} from '../ng2-resource';

export class DataProvider extends RestProvider{
  protected url : string = URL_PREFIX + "posts/:id";
  
  protected params : Object = { ':id' : '@id' }
  constructor(@Inject(Http) _http : Http) {
    // super is compulsory as Super class needs Http from the DI
    super(_http);
  }
}
```