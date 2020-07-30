# NG Bootstrap Modal Stack - Secondary Modal for [NG Bootstrap](https://ng-bootstrap.github.io/)

[![npm version](https://badge.fury.io/js/ng-bootstrap-modal-stack.svg)](https://badge.fury.io/js/ng-bootstrap-modal-stack)
[![devDependency Status](https://david-dm.org/bastienmoulia/ng-bootstrap-modal-stack/dev-status.svg?branch=master)](https://david-dm.org/bastienmoulia/ng-bootstrap-modal-stack#info=devDependencies)

This project is a workaround to display a secondary modal on top of the one from [NG Bootstrap](https://ng-bootstrap.github.io/).

## Table of Contents

- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
  - [SCSS](#scss)
  - [SystemJS](#systemjs)
- [Supported browsers](#supported-browsers)

## Demo

View it in action : https://stackblitz.com/edit/ng-bootstrap-modal-stack

## Dependencies
* [Angular](https://angular.io) (tested with 5.0.2)
* [Bootstrap 4](https://www.getbootstrap.com) (tested with 4.0.0)
* [NG Bootstrap](https://ng-bootstrap.github.io) (tested with 1.1.2)

## Installation
After installing the above dependencies, install `ng-bootstrap-modal-stack` via:
```shell
npm install --save ng-bootstrap-modal-stack
```
Once installed you need to import our main module:
```js
import {NgbModalStackModule} from 'ng-bootstrap-modal-stack';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice `NgbModalStackModule.forRoot()`):
```js
import {NgbModalStackModule} from 'ng-bootstrap-modal-stack';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgbModalStackModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import `NgbModalStackModule`:

```js
import {NgbModalStackModule} from 'ng-bootstrap-modal-stack';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [NgbModalStackModule, ...], 
})
export class OtherModule {
}
```
### SCSS

You need to import the custom scss for the secondary modal.
```scss
@import "~ng-bootstrap-modal-stack/index";
```

### SystemJS
If you are using SystemJS, you should also adjust your configuration to point to the UMD bundle.

In your systemjs config file, `map` needs to tell the System loader where to look for `ng-bootstrap-modal-stack`:
```js
map: {
  'ng-bootstrap-modal-stack': 'node_modules/ng-bootstrap-modal-stack/bundles/ng-bootstrap.js',
}
```
## Supported browsers

We support the same browsers and versions supported by both Bootstrap 4 and Angular, whichever is _more_ restrictive.
See [this](https://github.com/angular/angular/blob/master/README.md) for up-to-date Angular browser support.

* Chrome (45+)
* Firefox (40+)
* IE (10+) 
* Edge (20+)
* Safari (7+)

Also check [Bootstrap 4's notes](https://getbootstrap.com/docs/4.0/getting-started/browsers-devices/#supported-browsers) on browsers support.
