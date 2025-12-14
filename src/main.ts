import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { AppNavbar } from './app/navbar/navbar';

bootstrapApplication(AppNavbar,  appConfig)
  .catch((err) => console.error(err));
