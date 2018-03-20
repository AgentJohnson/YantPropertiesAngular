import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PropertiesRoutingModule } from './properties-routing.module';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    PropertiesRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ],
  declarations: [PropertyListComponent, PropertyDetailComponent]
})
export class PropertiesModule { }
