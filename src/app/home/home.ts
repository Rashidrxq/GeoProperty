import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy } from '../buy/buy';
import { Sell } from '../sell/sell';
import { Rental } from '../rental/rental';
import { Map } from '../map/map';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PropertyService } from '../property';

import { Agent } from '../agent/agent';


@Component({
  selector: 'app-home',
  imports: [Buy, Sell, Rental, Map, FormsModule, CommonModule, Agent],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  constructor(
  private router: Router,
  private propertyService: PropertyService
) {}

openDetails(property: any) {
  this.propertyService.selectedProperty = property;
  this.router.navigate(['/property', property.id]);
}

goToLogin() {
  this.router.navigate(['/login']);
}
  @ViewChild(Map) map!: Map;
  selectedPrice: string = '';
  selectedLocation: string = '';
  selectedLookingFor: string = '';
  selectedPropertyType: string = '';
  selectedBedrooms: string = '';
  selectedAmenities: string[] = [];

  filteredProperties: any[] = [];

  properties: any[] = [];




  // toogle amenity function
  toggleAmenity(amenity: string, event: any) {
    if (event.target.checked) {
      this.selectedAmenities.push(amenity);
    } else {
      const index = this.selectedAmenities.indexOf(amenity);
      if (index > -1) {
        this.selectedAmenities.splice(index, 1);
      }
    }
    this.applyFilters(); // 🔥 ADD THIS
  }

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
    this.filteredProperties = this.properties;
  }


  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }



  applyFilters() {

    let filtered = this.properties;

    // Price
    if (this.selectedPrice) {
      const [min, max] = this.selectedPrice.split('-').map(Number);
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }

    // Location
    if (this.selectedLocation) {
      filtered = filtered.filter(p =>
        p.location.toLowerCase().includes(this.selectedLocation.toLowerCase())
      );
    }

    // Amenities
    if (this.selectedAmenities.length > 0) {
      filtered = filtered.filter(p =>
        this.selectedAmenities.every(a => p.amenities.includes(a))
      );
    }

    this.filteredProperties = filtered;

    // send to map
    this.map.updateMarkers(this.filteredProperties);
  }




  // 
  onPropertyHover(property: any) {
    if (this.map) {
      this.map.highlightMarker(property);
    }
  }

  onMouseLeave() {
    if (this.map) {
      this.map.resetMarkers();
    }
  }
}
