import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { PanelModule } from 'primeng/panel';
import { DataListModule } from 'primeng/datalist';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DailymotionComponent } from './dailymotion/dailymotion.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

import { DailymotionService } from './dailymotion.service';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DailymotionComponent,
    NotfoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    PanelModule,
    //DataListModule,
    ButtonModule
  ],
  providers: [DailymotionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
