import { Injectable } from '@angular/core'; import { HttpClient } from '@angular/common/http'; import { Observable } from 'rxjs';
export interface Customer {Id:string;Name:string;Email:string;Age:number;Image:string}
export interface CustomerGroup {CustomerTypeId:number;CustomterTypeName:string;Customers:Customer[]}
@Injectable({providedIn:'root'}) export class CustomerService {constructor(private http:HttpClient){} getCustomerGroups():Observable<CustomerGroup[]>{return this.http.get<CustomerGroup[]>('assets/data/customers.json');}}
