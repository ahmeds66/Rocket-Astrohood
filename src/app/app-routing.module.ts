import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RocketsComponent } from './rockets/rockets.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';
const routes: Routes = [
  { path: 'rockets', component: RocketsComponent },
  { path: 'add-rocket', component: AddRocketComponent },
  {path: '', redirectTo: '/rockets', pathMatch: 'full'},
  { path: 'updaterocket/:id', component: UpdateRocketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
