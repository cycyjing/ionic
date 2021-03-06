import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'product-list',
    loadChildren: () => import('./pages/product-list/product-list.module').then(m => m.ProductListPageModule)
  },
  {
    path: 'product-content',
    loadChildren: () => import('./pages/product-content/product-content.module').then(m => m.ProductContentPageModule)
  },
  {
    path: 'account-setting',
    loadChildren: () => import('./pages/account-setting/account-setting.module').then(m => m.AccountSettingPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./pages/address/address.module').then(m => m.AddressPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'address-add',
    loadChildren: () => import('./pages/address-add/address-add.module').then(m => m.AddressAddPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'address-edit',
    loadChildren: () => import('./pages/address-edit/address-edit.module').then(m => m.AddressEditPageModule),
    canActivate: [LoginGuard]
  },  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then( m => m.PaymentPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
