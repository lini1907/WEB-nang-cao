import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list';
import { ProductDetailComponent } from './product-detail/product-detail';
const routes: Routes=[{path:'service-product-image-event',component:ProductListComponent},{path:'service-product-image-event/:id',component:ProductDetailComponent},{path:'',redirectTo:'service-product-image-event',pathMatch:'full'},{path:'**',redirectTo:'service-product-image-event'}];
@NgModule({imports:[RouterModule.forRoot(routes)],exports:[RouterModule]}) export class AppRoutingModule {}
