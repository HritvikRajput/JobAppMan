import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isLogin: any = false;
  constructor() {
    this.isLogin = localStorage.getItem('isLogin') ? true : false;
  }
}
