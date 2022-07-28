import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.scss'],
})
export class AvailabilityComponent implements OnInit {
  @Input() inStock: boolean = true;
  constructor() {}

  // checkStock(){
  //   if(!this.inStock){
  //     document.getElementById('stock')!.innerHTML = 'Sold Out';
  //     this.inStock = true;
  //   }
  // }

  ngOnInit(): void {}
}
