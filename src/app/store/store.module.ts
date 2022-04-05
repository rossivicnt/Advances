import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogComponent } from './catalog/catalog.component';
import { StoreRoutingModule } from './store-routing.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { FlexLayoutModule, FlexModule, GridModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,    
    FlexLayoutModule,
    FlexModule,
    GridModule,
    MatGridListModule
  ]
})
export class StoreModule { }
