import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modulos
import { AppRouttingModule } from './app-routing.module'; // routing module

// pages o componentes
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouttingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
