// export interface Product {
//       ProductID: number;
//       product_name: string;
//       product_desc: string;
//       product_price: number;
//       product_image1: string;
//       product_image2: string;
//       product_quantity: number;
//       product_display: boolean;
// }

export interface Product{
  id:number;
  attributes: {
    product_name: string;
    product_desc: string;
    product_price: number;
    product_quantity: number;
    product_display: boolean;
    product_image:{
        data:[
          {
            id:number;
            attributes:{
              alternativeText:string;
              url:string;
            }
          }
        ]
    }
  }
}


export interface Products {
  data:Product[]
}