import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab',
    loadChildren: () => import('./tab/tab.module').then( m => m.TabPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'tab5',
    loadChildren: () => import('./tab5/tab5.module').then( m => m.Tab5PageModule)
  },
  {
    path: 'city',
    loadChildren: () => import('./city/city.module').then( m => m.CityPageModule)
  },
  {
    path: 'roadtrip',
    loadChildren: () => import('./roadtrip/roadtrip.module').then( m => m.RoadtripPageModule)
  },
  {
    path: 'camping',
    loadChildren: () => import('./camping/camping.module').then( m => m.CampingPageModule)
  },
  {
    path: 'cruise',
    loadChildren: () => import('./cruise/cruise.module').then( m => m.CruisePageModule)
  },
  {
    path: 'resort',
    loadChildren: () => import('./resort/resort.module').then( m => m.ResortPageModule)
  },
  {
    path: 'volunteering',
    loadChildren: () => import('./volunteering/volunteering.module').then( m => m.VolunteeringPageModule)
  },
  {
    path: 'seniors',
    loadChildren: () => import('./seniors/seniors.module').then( m => m.SeniorsPageModule)
  },
  {
    path: 'solo',
    loadChildren: () => import('./solo/solo.module').then( m => m.SoloPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
