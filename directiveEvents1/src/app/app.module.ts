import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DirectiveHostListener1} from "./directive-host-listener1.directive";
import {DirectiveHostListener2} from "./directive-host-listener2.directive";
import {DirectiveHostListener3} from "./directive-host-listener3.directive";

@NgModule({
  declarations: [
    AppComponent,
    DirectiveHostListener1,
    DirectiveHostListener2,
    DirectiveHostListener3
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
