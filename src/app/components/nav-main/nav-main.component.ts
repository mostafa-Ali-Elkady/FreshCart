import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from "src/app/services/auth.service";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
CartService
@Component({
  selector: 'app-nav-main',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-main.component.html',
  styleUrls: ['./nav-main.component.css']
})
export class NavMainComponent implements OnInit  {
  isLogin:boolean= false;
  cartnum:number=0;
  constructor(private _AuthService:AuthService , private _Renderer2:Renderer2 , private _CartService:CartService){

  }
  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () =>{
        if(this._AuthService.userData.getValue() !== null) {
      this.isLogin = true
        }else {
          this.isLogin = false
        }
      }
    })
    this._CartService.cartNumber.subscribe({
      next:(data)=> {
        this.cartnum = data
      }
    })
  }
  logOut() {
    this._AuthService.logOut()
  }

    toggleMode() {
      const body = document.getElementsByTagName('body')[0];
      body.classList.toggle('dark-mode');
      body.classList.toggle('light-mode');
    }

}
