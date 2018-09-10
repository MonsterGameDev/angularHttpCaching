import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TestServiceComponent } from './test-service/test-service.component';
import { DataService } from './core/data.service';
import { HttpCacheService } from './core/http-cache.service';

import { CacheInterceptor } from './core/cache.interceptor';
import { Page2Component } from './page2/page2.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
@NgModule({
  declarations: [
    AppComponent,
    TestServiceComponent,
    Page2Component,
    ItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: TestServiceComponent }, // , resolve: { resolvedArmor: DataResolverService}
      { path: 'itemDetails/:id', component: ItemDetailsComponent },
    ])
  ],
  providers: [
    DataService,
    HttpCacheService,
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
