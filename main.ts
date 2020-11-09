
import './polyfills';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_DATE_LOCALE_PROVIDER,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  NativeDateAdapter,
  DateAdapter
} from '@angular/material';
import { TextMaskModule } from 'angular2-text-mask';
import { CustomDatepicker } from './app/custom-datepicker';
import { CustomDateAdapter, MY_DATE_FORMATS } from './app/custom-date-adapter';
import { AppComponent } from './app/app.component';

@NgModule({
  exports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
  ]
})
export class DemoMaterialModule {}

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TextMaskModule
  ],
  entryComponents: [CustomDatepicker, AppComponent],
  declarations: [CustomDatepicker, AppComponent],
  bootstrap: [AppComponent],
  providers: [
    MAT_DATE_LOCALE_PROVIDER,
    { provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS }
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
