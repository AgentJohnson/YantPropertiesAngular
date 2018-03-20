import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutInformationComponent} from './about-information/about-information.component';

const routes: Routes = [
  { path: '', component: AboutInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
