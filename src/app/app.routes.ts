import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('home').then((m) => m.HomeModule),
  },
  // quando for componente standalone
  // {
  //   path: 'product',
  //   loadComponent: () =>
  //     import('product-detail').then((m) => m.ProductDetailComponent),
  // },
  {
    path: 'product',
    loadChildren: () =>
      import('product-detail').then((m) => m.productDetailRoutes),
  },
  {
    path: 'cart',
    loadChildren: () => import('cart').then((m) => m.cartRoutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('auth-form').then((m) => m.authFormRoutes),
  },
];
