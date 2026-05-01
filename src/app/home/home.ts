import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Buy } from '../buy/buy';
import { Sell } from '../sell/sell';
import { Rental } from '../rental/rental';
import { Map } from '../map/map';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [Buy, Sell, Rental, Map, FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  @ViewChild(Map) map!: Map;
  selectedPrice: string = '';
  selectedLocation: string = '';
  selectedLookingFor: string = '';
  selectedPropertyType: string = '';
  selectedBedrooms: string = '';
  selectedAmenities: string[] = [];

  filteredProperties: any[] = [];

  properties = [
    { id: 1, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000, location: 'Calicut', bedroom: 3, propertytype: "house", lookingfor: "buy", propertyimg: "assets/house1.jpg", amenities: ['pool', 'wifi', 'pet friendly'] },
    { id: 2, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000, location: 'Calicut', bedroom: 2, propertytype: "apartment", lookingfor: "rent", propertyimg: "assets/house2.jpg", amenities: ['wifi'] },
    { id: 3, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000, location: 'Calicut', bedroom: 4, propertytype: "villa", lookingfor: "buy", propertyimg: "assets/house3.jpg", amenities: ['parking', 'wifi', 'pool'] },
    { id: 4, title: 'House near Railway Station', lat: 11.2450, lng: 75.7700, price: 45000, location: 'Tvm', bedroom: 3, propertytype: "house", lookingfor: "rent", propertyimg: "assets/house1.jpg", amenities: ['wifi', 'parking'] },
    { id: 5, title: 'House near Hilite Mall', lat: 11.2500, lng: 75.7800, price: 80000, location: 'Kochi', bedroom: 4, propertytype: "apartment", lookingfor: "buy", propertyimg: "assets/house2.jpg", amenities: ['pool', 'gym'] },
    { id: 6, title: 'Luxury Villa in Kochi', lat: 11.2520, lng: 75.7750, price: 90000, location: 'Kochi', bedroom: 5, propertytype: 'villa', lookingfor: 'buy', propertyimg: "assets/house3.jpg", amenities: ['parking', 'pool', 'gym'] }
  ];




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



}
