"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[381],{1381:(m,l,e)=>{e.r(l),e.d(l,{AuthLayoutComponent:()=>v});var i=e(6895),s=e(9427),t=e(1571),c=e(4377);function u(n,a){1&n&&(t.TgZ(0,"li",17)(1,"a",18),t._uU(2,"LogIn"),t.qZA()())}function g(n,a){1&n&&(t.TgZ(0,"li",17)(1,"a",19),t._uU(2,"SignUp"),t.qZA()())}let p=(()=>{class n{constructor(o,r){this._AuthService=o,this._Renderer2=r,this.isLogin=!1}ngOnInit(){this._AuthService.userData.subscribe({next:()=>{this.isLogin=null!==this._AuthService.userData.getValue()}})}logOut(){this._AuthService.logOut()}toggleMode(){const o=document.getElementsByTagName("body")[0];o.classList.toggle("dark-mode"),o.classList.toggle("light-mode")}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(c.e),t.Y36(t.Qsj))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-nav-auth"]],standalone:!0,features:[t.jDz],decls:24,vars:2,consts:[[1,"navbar","navbar-expand-lg","fixed-top","bg-color"],[1,"container-lg-fluid","container"],["routerLinkActive"," home",1,"navbar-brand","bg-main-light"],["src","assets/images/freshcart-logo.svg","alt","logo"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarSupportedContent","aria-controls","navbarSupportedContent","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler","shadow-0"],[1,"fa","fa-bars","txt-color"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","ms-auto","mb-2","me-2","mb-lg-0","social-icons","gap-2","flex-row"],[1,"cursor-pointer","txt-color","fa-brands","fa-facebook"],[1,"cursor-pointer","txt-color","fa-brands","fa-twitter"],[1,"cursor-pointer","txt-color","fa-brands","fa-instagram"],[1,"cursor-pointer","txt-color","fa-brands","fa-tiktok"],[1,"cursor-pointer","txt-color","fa-brands","fa-youtube"],[1,"cursor-pointer","txt-color","fa-brands","fa-pinterest"],[1,"navbar-nav","me-2","mb-2","mb-lg-0"],["class","nav-item me-2 rounded",4,"ngIf"],[1,"fa-solid","fa-moon","txt-color","cursor-pointer","fs-3","me-2",3,"click"],[1,"nav-item","me-2","rounded"],["aria-current","page","routerLink","/login","routerLinkActive","bg-sec txt-color rounded",1,"nav-link","txt-color","active","rounded"],["aria-current","page","routerLink","signup","routerLinkActive","bg-sec txt-color rounded",1,"nav-link","txt-color","active","rounded"]],template:function(o,r){1&o&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"button",4),t._UZ(5,"i",5),t.qZA(),t.TgZ(6,"div",6)(7,"ul",7)(8,"li"),t._UZ(9,"i",8),t.qZA(),t.TgZ(10,"li"),t._UZ(11,"i",9),t.qZA(),t.TgZ(12,"li"),t._UZ(13,"i",10),t.qZA(),t.TgZ(14,"li"),t._UZ(15,"i",11),t.qZA(),t.TgZ(16,"li"),t._UZ(17,"i",12),t.qZA(),t.TgZ(18,"li"),t._UZ(19,"i",13),t.qZA()(),t.TgZ(20,"ul",14),t.YNc(21,u,3,0,"li",15),t.YNc(22,g,3,0,"li",15),t.qZA(),t.TgZ(23,"i",16),t.NdJ("click",function(){return r.toggleMode()}),t.qZA()()()()),2&o&&(t.xp6(21),t.Q6J("ngIf",!r.isLogin),t.xp6(1),t.Q6J("ngIf",!r.isLogin))},dependencies:[i.ez,i.O5,s.rH,s.Od],styles:[".navbar-toggler[_ngcontent-%COMP%]:focus{box-shadow:none}.fa-cart-shopping[_ngcontent-%COMP%]{color:var(--main-color)}.navbar[_ngcontent-%COMP%]{box-shadow:0 0 14px .2px var(--main-color)}.navbar-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .navbar-nav[_ngcontent-%COMP%]   .nav-link.show[_ngcontent-%COMP%]{color:var(--txt)!important}"]}),n})();var d=e(4662);let v=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth-layout"]],standalone:!0,features:[t.jDz],decls:4,vars:0,consts:[[1,"container","custom-padding","custom-padding"]],template:function(o,r){1&o&&(t._UZ(0,"app-nav-auth"),t.TgZ(1,"div",0),t._UZ(2,"router-outlet"),t.qZA(),t._UZ(3,"app-footer"))},dependencies:[i.ez,p,s.lC,d.c],styles:["[_nghost-%COMP%]{min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end}"]}),n})()}}]);