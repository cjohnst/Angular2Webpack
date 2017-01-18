// Entry point for JiT compilation.
export * from './polyfills';
export * from './vendor';


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app.module';
const platform = platformBrowserDynamic();

//enableProdMode()
platform.bootstrapModule(AppModule)
    .catch(err => console.error(err));

