import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  product_name: string = '';
  product_desc: string = '';
  product_price: any = '';
  // product_image1: string = '';
  // product_image2: string = '';
  product_quantity: any = '';
  display: any = '';
  updateStatus = false;
  showMessage = 'none';
  errorMessage: any = '';

  constructor(
    private param: ActivatedRoute,
    private cs: CommonService,
    private router: Router
  ) {}

  update() {
    let id: any = this.param.snapshot.paramMap.get('id');
    let updateData = {
      data: {
        product_name: this.product_name,
        product_desc: this.product_desc,
        product_price: this.product_price,
        product_quantity: this.product_quantity
      }
    };
    this.cs.updateProduct(id, updateData).subscribe(res =>{
      this.updateStatus = true;
      this.showMessage ='block';
    });
  }

  delete(){
    if(confirm('Are you sure?')){
      let id:any = this.param.snapshot.paramMap.get('id');
      this.cs.deleteProduct(id).subscribe(res =>{
        this.router.navigate(['/admin/home']);
      })
    }
  }

  //   update() {
  //     let id: any = this.param.snapshot.paramMap.get('id');
  //     this.cs.updateProduct(id, this.product_name, this.product_desc, this.product_price, this.product_image1, this.product_image2, this.product_quantity).subscribe((updateConfirmation) => {
  //       console.log(updateConfirmation);
  //       this.updateStatus = updateConfirmation.update;
  //       this.showMessage = 'block';
  //       this.errorMessage = updateConfirmation.message;
  //     })

  //  }

  // delete() {
  //   if (confirm('Are you sure?')) {
  //     let id: any = this.param.snapshot.paramMap.get('id');
  //     this.cs.deleteProduct(id).subscribe((response) => {
  //       console.log(response);
  //       this.router.navigate(['/admin']);
  //     });
  //   }
  // }


  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.cs.getproductByID(id).subscribe(res => {
      this.product_name = res.data.attributes.product_name;
      this.product_desc = res.data.attributes.product_desc;
      this.product_price = res.data.attributes.product_price;
      this.product_quantity = res.data.attributes.product_quantity;
    });
    // console.log(this.param.snapshot.paramMap.get('id'));
    // let id: any = this.param.snapshot.paramMap.get('id');
    // this.cs.getproductByID(id).subscribe((productDetail) => {
    //   console.log(productDetail);
    //   this.product_name = productDetail.productData[0].product_name;
    //   this.product_desc = productDetail.productData[0].product_desc;
    //   this.product_price = productDetail.productData[0].product_price;
    //   this.product_image1 = productDetail.productData[0].product_image1;
    //   this.product_image2 = productDetail.productData[0].product_image2;
    //   this.product_quantity = productDetail.productData[0].product_quantity;
    // })
  }
}
