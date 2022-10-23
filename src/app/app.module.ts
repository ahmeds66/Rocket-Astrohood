import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketsComponent } from './rockets/rockets.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { FormsModule } from '@angular/forms';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
@NgModule({
  declarations: [
    AppComponent,
    RocketsComponent,
    AddRocketComponent,
    UpdateRocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
