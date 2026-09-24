import { Injectable } from '@angular/core';
export interface CatalogProduct {ProductId:string;ProductName:string;Price:number;Image:string}
export interface Category {Cateid:string;CateName:string;Products:CatalogProduct[]}
@Injectable({providedIn:'root'}) export class CatalogService { private readonly datas:Category[]=[
 {Cateid:'cate1',CateName:'Nước ngọt',Products:[{ProductId:'p1',ProductName:'Coca',Price:100,Image:'assets/h1.svg'},{ProductId:'p2',ProductName:'Pepsi',Price:300,Image:'assets/h2.svg'},{ProductId:'p3',ProductName:'Sting',Price:200,Image:'assets/h3.svg'}]},
 {Cateid:'cate2',CateName:'Bia',Products:[{ProductId:'p4',ProductName:'Heineken',Price:500,Image:'assets/h4.svg'},{ProductId:'p5',ProductName:'333',Price:400,Image:'assets/h5.svg'},{ProductId:'p6',ProductName:'Sài Gòn',Price:600,Image:'assets/h6.svg'}]}
]; getCategories(){return this.datas;} }
