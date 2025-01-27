import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from './store/store.module';

const routes: Routes = [  
  { path: '', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },
  { path: 'user', loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfileModule) },
  { path: 'access', loadChildren: () => import('./login-register/login-register.module').then(m => m.LoginRegisterModule) },
  { path: '**', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
