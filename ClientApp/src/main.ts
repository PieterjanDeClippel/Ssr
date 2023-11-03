import { enableProdMode, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { SERVER_SIDE } from '@mintplayer/ng-server-side';

import { environment } from './environments/environment';
import { AppBrowserModule } from './app/app.browser.module';

if (environment.production) {
  enableProdMode();
}

function bootstrap() {
  const providers: StaticProvider[] = [
    { provide: SERVER_SIDE, useValue: false }
  ];

  // Bootstrap the AppBrowserModule instead
  platformBrowserDynamic(providers).bootstrapModule(AppBrowserModule)
    .catch(err => console.error(err));
};


if (document.readyState === 'complete') {
  bootstrap();
} else {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

