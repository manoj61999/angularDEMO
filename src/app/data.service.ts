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
  export class Addition {
    firstNumber: Number | undefined;
    secondNumber: Number | undefined;
    }
  export class subraction {
    firstNumber: Number | undefined;
    secondNumber: Number | undefined;
  } 
  export class multiplication {
    firstNumber: Number | undefined;
    secondNumber: Number | undefined;
  }
  export class division {
    firstNumber: Number | undefined;
    secondNumber: Number | undefined;
  }
  





@Injectable({
  providedIn: 'root'
})
export class DataService {
  endPoint = 'http://localhost:3000';
  AddResult: any;

  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  







  //this method displaying data form MangoDB 
  //registration.component.ts 

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

                //addition: getting data from calculator.component.ts

  addCalculator(data: FormGroup): Observable<Addition> {
    
    let savedata={
      "firstNumber":data.value.firstNumber,
      "secondNumber":data.value.secondNumber
    }
    console.log(savedata,"addition")
    return this.httpClient.post<Addition>(this.endPoint + '/api/Addition', JSON.stringify(savedata), this.httpHeader)
  }


              //subraction: getting data from calculator.component.ts


  subCalculator(data: FormGroup): Observable<subraction> {

    let subdata = {
      "firstNumber":data.value.firstNumber,
      "secondNumber":data.value.secondNumber
    }
    console.log(subdata,"subraction")
    return this.httpClient.post<subraction>(this.endPoint + '/api/subraction', JSON.stringify(subdata), this.httpHeader)
  }


               //multiplication: getting data from calculator.component.ts

  multiCalculator(data: FormGroup): Observable<multiplication> {

    let multidata = {
      "firstNumber":data.value.firstNumber,
      "secondNumber":data.value.secondNumber
    }
    console.log(multidata,"multiplication");
    return this.httpClient.post<multiplication>(this.endPoint + '/api/Multi', JSON.stringify(multidata), this.httpHeader)
  }

              //division: getting data from calculator.component.ts
  diviCalculator(data: FormGroup): Observable<division> {

    let dividata = {
      "firstNumber":data.value.firstNumber,
      "secondNumber":data.value.secondNumber
    }
    console.log(dividata,"division");
    return this.httpClient.post<division>(this.endPoint +'/api/Division', JSON.stringify(dividata), this.httpHeader)
  }
}