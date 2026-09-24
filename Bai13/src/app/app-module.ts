import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';
@NgModule({declarations:[App,ProductListComponent,ProductDetailComponent],imports:[BrowserModule,AppRoutingModule],providers:[provideBrowserGlobalErrorListeners()],bootstrap:[App]})
export class AppModule {}
