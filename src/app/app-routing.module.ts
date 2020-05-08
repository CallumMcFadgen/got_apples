import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'growers',
    loadChildren: () => import('./pages/growers/growers.module').then( m => m.GrowersPageModule)
  },
  {
    path: 'grower',
    loadChildren: () => import('./pages/growers/grower/grower.module').then( m => m.GrowerPageModule)
  },
  {
    path: 'auctions',
    loadChildren: () => import('./pages/auctions/auctions.module').then( m => m.AuctionsPageModule)
  },
  {
    path: 'auction',
    loadChildren: () => import('./pages/auctions/auction/auction.module').then( m => m.AuctionPageModule)
  },
  {
    path: 'varieties',
    loadChildren: () => import('./pages/varieties/varieties.module').then( m => m.VarietiesPageModule)
  },
  {
    path: 'varietiey',
    loadChildren: () => import('./pages/varieties/variety/variety.module').then( m => m.VarietyPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'article',
    loadChildren: () => import('./pages/news/article/article.module').then( m => m.ArticlePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/login/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/login/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'manage-auctions',
    loadChildren: () => import('./pages/login/dashboard/manage-auctions/manage-auctions.module').then( m => m.ManageAuctionsPageModule)
  },
  {
    path: 'manage-account',
    loadChildren: () => import('./pages/login/dashboard/manage-account/manage-account.module').then( m => m.ManageAccountPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
