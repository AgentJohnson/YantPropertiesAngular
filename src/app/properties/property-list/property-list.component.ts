import { Component, OnInit } from '@angular/core';
import { PROPERTIES } from '../property-list';
import { Property } from '../property';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties = PROPERTIES;

  selectedProperty: Property;

  onSelect(property: Property): void {
    this.selectedProperty = property;
  }

  constructor() { }

  ngOnInit() {
  }

}
