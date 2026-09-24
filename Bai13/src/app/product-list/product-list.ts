import { Component } from '@angular/core'; import { Router } from '@angular/router'; import { ProductService } from '../product.service'; import { Product } from '../product';
@Component({selector:'app-product-list',templateUrl:'./product-list.html',styleUrl:'./product-list.css',standalone:false})
export class ProductListComponent { products:Product[]; constructor(service:ProductService,private router:Router){this.products=service.getProductsWithImages();} viewDetail(product:Product){this.router.navigate(['/service-product-image-event',product.ProductId]);} }
