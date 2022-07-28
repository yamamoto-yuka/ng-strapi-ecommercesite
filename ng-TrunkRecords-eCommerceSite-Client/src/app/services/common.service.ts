import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product, Products } from '../interfaces/product';
import { User } from '../interfaces/adminuser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  private productURL = 'http://localhost:4500/product';
  private toggleURL = 'http://localhost:4500/displayupdate';
  private signupURL = 'http://localhost:4500/signup';
  private loginURL = 'http://localhost:4500/login';

  private server = environment.server;

  constructor(private http: HttpClient) {}

  // Endpoints from Strapi
  getAllproduct() {
    return this.http.get<Products>(
      this.server + '/api/apparelpages?populate=deep'
    );
  }

  getproductByID(id: number) {
    return this.http.get<{ data: Product }>(
      this.server + '/api/apparelpages/' + id + '?populate=deep'
    );
  }

  login(data: any) {
    return this.http.post<{ jwt: string }>(
      this.server + '/api/auth/local',
      data
    );
  }

  register(data:any){
    return this.http.post(this.server + '/api/auth/local/register', data);
  }

  addNewProduct(data: any) {
    return this.http.post<{ data: Product }>(
      this.server + '/api/apparelpages',
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }

  updateProduct(id: any, data: any) {
    return this.http.put<{ data: Product }>(
      this.server + '/api/apparelpages/' + id,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt')
        },
      }
    );
  }

  updateDisplay(id:any, displaydata:any) {
    return this.http.put<{data:Product}>(this.server + '/api/apparelpages/' + id, displaydata,{
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('jwt')
      },
    });
  }


  deleteProduct(id: number) {
    return this.http.delete<{ data: Product }>(
      this.server + '/api/apparelpages/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + localStorage.getItem('jwt'),
        },
      }
    );
  }



  // For guard.ts
  isLoggedIn() {
    if (localStorage.getItem('jwt')) {
      return true;
    } else {
      return false;
    }
  }

  // From node server
  // uploadFile(filedata: any) {
  //   return this.http.post('http://localhost:4500/upload', filedata);
  // }

  // signupService(username: string, password: string) {
  //   let signupbody = {
  //     username: username,
  //     password: password,
  //   };
  //   return this.http.post<{
  //     userData: User[];
  //     signup: boolean;
  //     message: string;
  //   }>(this.signupURL, signupbody);
  // }

  // updateDisplay(ProductID: number) {
  //   let updatedisplaybody = {
  //     ProductID: ProductID,
  //   };
  //   return this.http.put<{
  //     displayData: Product[];
  //     display: boolean;
  //     message: string;
  //   }>(this.toggleURL, updatedisplaybody);
  // }


  // getAllproduct() {
  //   return this.http.get<Product[]>(this.productURL);
  // }

  // getproductByID(id: number) {
  //   return this.http.get<{
  //     productid: boolean;
  //     message: string;
  //     productData: Product[];
  //   }>(this.productURL + '/' + id);
  // }

  // loginService(username: string, password: string) {
  //   let loginbody = {
  //     username: username,
  //     password: password,
  //   };
  //   return this.http.post<{ data: User[]; login: boolean; message: string }>(
  //     this.loginURL,
  //     loginbody
  //   );
  // }

  // addNewProduct(
  //   product_name: string,
  //   product_desc: string,
  //   product_price: number,
  //   product_image1: string,
  //   product_image2: string,
  //   product_availability: number
  // ) {
  //   let newproductbody = {
  //     product_name: product_name,
  //     product_desc: product_desc,
  //     product_price: product_price,
  //     product_image1: product_image1,
  //     product_image2: product_image2,
  //     product_availability: product_availability,
  //   };
  //   return this.http.post<{
  //     newProduct: Product[];
  //     insert: boolean;
  //     message: string;
  //   }>(this.productURL, newproductbody);
  // }

  // updateProduct(
  //   ProductID: number,
  //   product_name: string,
  //   product_desc: string,
  //   product_price: number,
  //   product_image1: string,
  //   product_image2: string,
  //   product_quantity: any
  // ) {
  //   let updatebody = {
  //     ProductID: ProductID,
  //     product_name: product_name,
  //     product_desc: product_desc,
  //     product_price: product_price,
  //     product_image1: product_image1,
  //     product_image2: product_image2,
  //     product_quantity: product_quantity,
  //   };
  //   return this.http.put<{
  //     update: boolean;
  //     updatedData: Product[];
  //     message: string;
  //   }>(this.productURL, updatebody);
  // }

  // deleteProduct(id: number) {
  //   return this.http.delete<{ delStatus: boolean; message: string }>(
  //     this.productURL + '/' + id
  //   );
  // }
}
