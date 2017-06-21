import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule, appRouterComponents } from './app-routing.module';

import { DialogService } from './services/dialog.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    appRouterComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    DialogService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
