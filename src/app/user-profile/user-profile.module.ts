import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule  } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import {MatDialogModule} from '@angular/material/dialog';
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule, FlexModule, GridModule } from '@angular/flex-layout';
import { NgxMatFileInputModule } from "@angular-material-components/file-input";
import { MatRadioModule } from "@angular/material/radio";
import { MatTabsModule } from '@angular/material/tabs';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [    
    ProfileComponent,
    UserComponent
  ], 
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    FlexLayoutModule,
    FlexModule,
    GridModule,
    MatCheckboxModule,
    MatGridListModule,
    NgxMatFileInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatTabsModule,
    MatChipsModule,
    MatListModule
  ]
})
export class UserProfileModule { }
