import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  activeBtn:boolean = false;
  constructor() {}

  menuBtn(){
    this.activeBtn = !this.activeBtn;
  }

  ngOnInit(): void {}
}
