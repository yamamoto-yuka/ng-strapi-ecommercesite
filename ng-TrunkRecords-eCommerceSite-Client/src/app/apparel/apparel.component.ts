import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'apparel',
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.scss'],
})
export class ApparelComponent implements OnInit {
  products: any[] = [];
  url = environment.server;
  constructor(private service: CommonService) {}

  availability(data: any) {
    if (data > 0) return true;
    else return false;
  }

  ngOnInit(): void {
    this.service.getAllproduct().subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
  }
}
