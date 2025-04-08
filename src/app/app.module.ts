import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';
import { FraisService } from './services/frais.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [FraisService,
    provideHttpClient()],
  bootstrap: []
})
export class AppModule { }