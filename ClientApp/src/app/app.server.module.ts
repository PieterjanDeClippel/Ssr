import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { TranslateJsonLoader } from './translate-loaders/translate-json-loader';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: () => new TranslateJsonLoader()
      }
    })
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
