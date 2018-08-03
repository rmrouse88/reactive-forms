import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RoutingModule } from './routing/routing.module';
import { FormControlModule } from './form-control/form-control.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
