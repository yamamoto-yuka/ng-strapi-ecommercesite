import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'appareldetails',
  templateUrl: './appareldetails.component.html',
  styleUrls: ['./appareldetails.component.scss'],
})
export class AppareldetailsComponent implements OnInit {
  product: any;

  constructor(private param: ActivatedRoute, private service: CommonService) {}

  availability(data: any) {
    if (data > 0) return true;
    else return false;
  }

  ngOnInit(): void {
    let id: any = this.param.snapshot.paramMap.get('id');
    this.service.getproductByID(id).subscribe((res) => {
      this.product = res.data;
      console.log(res.data);
    });
  }
}
