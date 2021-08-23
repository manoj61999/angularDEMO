import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

export class User {
  id: string | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  password:string | undefined;
  phone:string | undefined;
  dob:string | undefined;
}
  export class pro {
    productname:String | undefined;
    productid:String | undefined;
    email:String | undefined;
    customerid:String | undefined;
    phone:String | undefined;
    address:String | undefined
  }
  export class  Order {
    orderid: String | undefined;
    productname: String | undefined;
    productquantity: Number | undefined;
    productprice: Number | undefined;
    totalprice: Number | undefined;
    address: String | undefined;
  }

@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getUsers(): Observable<User> {
    return this.httpClient.get<User>(this.endPoint + '/api/getUserDetails');
  }
  getproduct(): Observable<pro> {
    return this.httpClient.get<pro>(this.endPoint + '/api/viewProduct');
  }
  getOrder(): Observable<Order> {
    return this.httpClient.get<Order>(this.endPoint + '/api/OrderReview');
  }


  //sample.component.ts


  addUser(data: FormGroup): Observable<User> {
    
    let senddata={
    "firstname":data.value.firstName,
    "lastname":data.value.lastName,
    "email":data.value.email,
    "password":data.value.password,
    "phone":data.value.number,
    "dob":data.value.DateoBirth
    }
    console.log(senddata,"userdetails")
    return this.httpClient.post<User>(this.endPoint + '/api/register', JSON.stringify(senddata), this.httpHeader)
  }  

  //Order.component.ts
  
  addOrder(data: FormGroup): Observable<Order> {

    let sendData={
      "orderid": data.value.orderid,
      "productname":data.value.productname,
      "productquantity": data.value.productquantity,
      "productprice": data.value.productprice,
      "totalprice": data.value.totalprice,
      "address": data.value.Address
    }
    console.log(sendData,"Orderdetails")
    return this.httpClient.post<Order>(this.endPoint + '/api/Order', JSON.stringify(sendData), this.httpHeader)
  }

}