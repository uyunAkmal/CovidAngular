import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CovidComponent } from './covid/covid.component';
import { HelloComponent } from './hello/hello.component';
import { HomeComponent } from './home/home.component';
import { MiningComponent } from './mining/mining.component';
import {BonusComponent } from './bonus/bonus.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'covid', component: CovidComponent },
  { path: 'home', component: HomeComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'mining', component: MiningComponent },
  { path: 'bonus', component: BonusComponent }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
