import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonsModule } from './commons/commons.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
import { RegisterComponent } from './login/register/register.component';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonsModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
  exports: [RegisterComponent]
})
export class AppModule { }
