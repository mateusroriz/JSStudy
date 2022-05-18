import { ServerComponent } from './server/server.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SucessAlertComponent } from './sucess-alert/sucess-alert.component';
import { FormsModule } from '@angular/forms';
import { UsernameComponent } from './username/username.component';
import { DisplayDetailsComponent } from './display-details/display-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SucessAlertComponent,
    UsernameComponent,
    DisplayDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
