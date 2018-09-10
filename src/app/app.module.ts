import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { DataService } from './core/data.service';
import { HttpCacheService } from './core/http-cache.service';

@NgModule({
  declarations: [
    AppComponent,
    TestServiceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [DataService, HttpCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
