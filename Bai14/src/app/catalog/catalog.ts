import { Component } from '@angular/core'; import { CatalogService,Category } from '../catalog.service';
@Component({selector:'app-catalog',templateUrl:'./catalog.html',styleUrl:'./catalog.css',standalone:false}) export class CatalogComponent {categories:Category[]; constructor(service:CatalogService){this.categories=service.getCategories();}}
