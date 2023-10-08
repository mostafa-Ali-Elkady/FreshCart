import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  // Main Pages
  {
    path: "",canActivate:[AuthGuard],
    loadComponent: () =>
      import("./layouts/main-layout/main-layout.component").then(
        (m) => m.MainLayoutComponent
      ),
    children: [
      { path: "", redirectTo: "home", pathMatch: "full" },
      {
        path: "home",
        loadComponent: () =>
          import("./components/home/home.component").then(
            (m) => m.HomeComponent
          ),
        title: "home",
      },
      {
        path: "cart",
        loadComponent: () =>
          import("./components/cart/cart.component").then(
            (m) => m.CartComponent
          ),
        title: "cart",
      },
      {
        path: "products",
        loadComponent: () =>
          import("./components/products/products.component").then(
            (m) => m.ProductsComponent
          ),
        title: "products",
      },
      {
        path: "product-details/:id",
        loadComponent: () =>
          import("./components/product-details/product-details.component").then(
            (m) => m.ProductDetailsComponent
          ),
        title: "products",
      },
      {
        path: "categories",
        loadComponent: () =>
          import("./components/categories/categories.component").then(
            (m) => m.CategoriesComponent
          ),
        title: "categories",
      },
      {
        path: "brands",
        loadComponent: () =>
          import("./components/brands/brands.component").then(
            (m) => m.BrandsComponent
          ),
        title: "brands",
      },
    ],
  },
  //Auth Pages
  {
    path: "",
    loadComponent: () =>
      import("./layouts/auth-layout/auth-layout.component").then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      {
        path: "login",
        loadComponent: () =>
          import("./components/login/login.component").then(
            (m) => m.LoginComponent
          ),
        title: "login",
      },
      {
        path: "signup",
        loadComponent: () =>
          import("./components/signup/signup.component").then(
            (m) => m.SignupComponent
          ),
        title: "signup",
      },
    ],
  },
  //Not Found
  {path:'**', loadComponent:()=> import('./components/notfound/notfound.component').then((m=>m.NotfoundComponent))}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }