import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  constructor(private route: ActivatedRoute, private translateService: TranslateService) {
    this.wireTranslations();
  }

  title = 'ClientApp';
  destroyed$ = new Subject();

  ngOnDestroy() {
    this.destroyed$.next(true);
  }

  wireTranslations() {
    const defaultLang = 'en';
    this.translateService.setDefaultLang(defaultLang);
    this.route.queryParamMap
      .pipe(takeUntil(this.destroyed$))
      .subscribe((params) => {
        let lang = params.get('lang');
        if (lang === null) {
          this.translateService.use(defaultLang);
        } else {
          this.translateService.use(lang);
        }
      });
  }
}
