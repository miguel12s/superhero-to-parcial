import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { SuperheroeService } from './services/superheroe.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),SuperheroeService]
};
