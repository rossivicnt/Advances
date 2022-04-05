import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatCardModule } from "@angular/material/card";
import {MatTooltipModule} from '@angular/material/tooltip';

import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import { HeaderNavbarComponent } from './common/header-navbar/header-navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { FlexLayoutModule, FlexModule, GridModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent, 
    StoreComponent,
    HeaderNavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    StoreModule,
    FlexLayoutModule,
    FlexModule,
    GridModule
  ],  
  schemas:[
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
