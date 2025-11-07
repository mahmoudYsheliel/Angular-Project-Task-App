import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';
import { provideHttpClient, HTTP_INTERCEPTORS, withInterceptorsFromDi } from '@angular/common/http';
import { TimimngInterceptor } from './core/interceptors/timming.interceptor';
import { LoggingInterceptor } from './core/interceptors/logging.interceptor';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { routes } from './app.routes';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { provideAnimations } from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    [
      { provide: HTTP_INTERCEPTORS, useClass: TimimngInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
      { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    ],
    importProvidersFrom(ToastModule),
    MessageService,
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'none' // ✅ light mode only
        }
      },

    })
  ]
};
