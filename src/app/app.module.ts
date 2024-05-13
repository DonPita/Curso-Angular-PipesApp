import { LOCALE_ID, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Sin el provideAnimations no funciona el browsermodule ni su tia.
import { provideAnimations } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { MenuModule } from 'primeng/menu';

//Configuración del locale de la app
import localeEs from '@angular/common/locales/es'
import localePtPt from '@angular/common/locales/pt-PT'

import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
registerLocaleData(localePtPt);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    MenuModule
  ],
  providers: [
    provideAnimations(),
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
