import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutRoutingModule } from './about-routing.module';
import { AboutInformationComponent } from './about-information/about-information.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatToolbarModule
  ],
  declarations: [AboutInformationComponent]
})
export class AboutModule { }
