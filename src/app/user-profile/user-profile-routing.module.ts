import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { UserProfileComponent } from './user-profile.component';

const routes: Routes = [
  { 
    path: '',
    component: UserProfileComponent,
    children: [
      { path: 'account', component: ProfileComponent }
    ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
