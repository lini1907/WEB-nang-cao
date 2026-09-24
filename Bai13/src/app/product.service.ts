import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({providedIn:'root'}) export class ProductService {
  private readonly products:Product[]=[
    {ProductId:'p1',ProductName:'Coca',Price:100,Image:'assets/h1.svg',Description:'Nước ngọt có ga vị cola, mát lạnh và sảng khoái.'},
    {ProductId:'p2',ProductName:'Pepsi',Price:300,Image:'assets/h2.svg',Description:'Nước giải khát cola với hương vị đậm đà.'},
    {ProductId:'p3',ProductName:'Sting',Price:200,Image:'assets/h3.svg',Description:'Nước tăng lực vị dâu, tiếp thêm năng lượng.'}
  ];
  getProductsWithImages(){return this.products;}
  getProductDetail(id:string){return this.products.find(p=>p.ProductId===id);}
}
