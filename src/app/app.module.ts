import { BrowserModule } from '@angular/platform-browser';
import { NgModule,ElementRef } from '@angular/core';
import { AppComponent } from './app.component';
import { AppComponent2 } from './app.component2';
import {HighLight} from './app.HighLightDirective'
import {Logger} from './LoggerService';
@NgModule({
  declarations: [
    AppComponent,
    AppComponent2,
    HighLight
  ],
  imports: [
    BrowserModule
  ],
  providers: [Logger,HighLight,ElementRef],
  bootstrap: [AppComponent,AppComponent2]
})
export class AppModule { }
