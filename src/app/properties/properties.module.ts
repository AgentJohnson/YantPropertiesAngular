import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule
  ],
  declarations: [PropertyListComponent]
})
export class PropertiesModule { }
