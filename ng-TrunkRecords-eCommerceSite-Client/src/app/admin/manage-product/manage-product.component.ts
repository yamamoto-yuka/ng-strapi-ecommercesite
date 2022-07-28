import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'manage-product',
  templateUrl: './manage-product.component.html',
  styleUrls: ['./manage-product.component.scss'],
})
export class ManageProductComponent implements OnInit {
  products: any[] = [];
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  product_availability: any = '';
  showMessage = 'none';
  addproductStatus = false;

 

  constructor(
    private cs: CommonService,
    private router:Router
  ) {}


  availavility(data: any) {
    if (data > 0) return true;
    else return false;
  }

  addproduct() {
    let addData = {
      data: {
        product_name: this.product_name,
        product_desc: this.product_desc,
        product_price: this.product_price,
        product_quantity: this.product_availability,
        product_display: false,
      },
    };
    this.cs.addNewProduct(addData).subscribe((res) => {
      console.log(res.data);
      this.showMessage = 'block';
      this.addproductStatus = true;
      this.ngOnInit();
    });
  }

  OnChangeDisplay(id:number, event:any){
    console.log(event);
      let updateData ={
        data:{
          product_display:event.target.checked 
        }
      }
      this.cs.updateDisplay(id, updateData).subscribe(res =>{
        console.log(res);
      })
  }

  signout(){
      localStorage.clear();
      this.router.navigate(['/admin/login']);
  }


  ngOnInit(): void {
    this.cs.getAllproduct().subscribe((res) => {
      this.products = res.data;
    });
  }


  // uploadImage() {
  //   this.cs.uploadFile(this.imageformData).subscribe((response) => {
  //     console.log(response);
  //   });
  // }

  // addproduct() {
  //   this.cs
  //     .addNewProduct(
  //       this.product_name,
  //       this.product_desc,
  //       this.product_price,
  //       this.product_image1,
  //       this.product_image2,
  //       this.product_availability
  //     )
  //     .subscribe((newproductDate) => {
  //       console.log(newproductDate);
  //       this.showMessage = 'block';
  //       this.addproductStatus = newproductDate.insert;
  //       this.errorMessage = newproductDate.message;
  //       this.ngOnInit();
  //     });
  // }
}
