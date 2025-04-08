import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig, // Garde la config existante
  providers: [...(appConfig.providers || []), provideHttpClient(withFetch())] // Ajoute HttpClient proprement
})
  .catch((err) => console.error(err));