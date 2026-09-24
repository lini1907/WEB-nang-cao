import { NgModule,provideBrowserGlobalErrorListeners } from '@angular/core'; import { BrowserModule } from '@angular/platform-browser'; import { App } from './app'; import { CatalogComponent } from './catalog/catalog';
@NgModule({declarations:[App,CatalogComponent],imports:[BrowserModule],providers:[provideBrowserGlobalErrorListeners()],bootstrap:[App]}) export class AppModule {}
