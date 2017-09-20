import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { bootloader, hmrModule } from '@angularclass/hmr';

export function main() {
  return platformBrowserDynamic().bootstrapModule(AppModule)
  // use `hmrModule` or the "@angularclass/hmr-loader"
    .then((ngModuleRef: any) => {
      // `module` global ref for webpackhmr
      // Don't run this in Prod
      return hmrModule(ngModuleRef, AppModule);
    });
}


bootloader(main);
