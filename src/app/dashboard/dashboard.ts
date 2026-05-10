import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PropertyService } from '../property';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  activeSection: string = 'dashboard';
  properties: any[] = [];
  
  showPropertyForm: boolean = false;
  editingPropertyId: number | null = null;
  
  newProperty: any = {
    title: '',
    location: '',
    price: null,
    bedroom: null,
    bathroom: null,
    propertytype: 'house',
    lookingfor: 'buy',
    propertyimg: '',
    amenities: [],
    images: []
  };

  availableAmenities = ['pool', 'gym', 'parking', 'pet friendly', 'wifi'];

  constructor(private router: Router, private propertyService: PropertyService) {}

  ngOnInit() {
    this.refreshProperties();
  }

  refreshProperties() {
    this.properties = this.propertyService.getProperties();
  }

  changeSection(section: string) {
    this.activeSection = section;
    this.showPropertyForm = false;
  }

  logout() {
    this.router.navigate(['/home']);
  }

  openAddProperty() {
    this.resetForm();
    this.showPropertyForm = true;
  }

  editProperty(property: any) {
    this.newProperty = { ...property, amenities: [...property.amenities] };
    this.editingPropertyId = property.id;
    this.showPropertyForm = true;
  }

  deleteProperty(id: number) {
    if(confirm('Are you sure you want to delete this property?')) {
      this.propertyService.deleteProperty(id);
      this.refreshProperties();
    }
  }

  cancelAdd() {
    this.showPropertyForm = false;
    this.resetForm();
  }

  toggleAmenity(amenity: string, event: any) {
    if (event.target.checked) {
      if (!this.newProperty.amenities.includes(amenity)) {
        this.newProperty.amenities.push(amenity);
      }
    } else {
      this.newProperty.amenities = this.newProperty.amenities.filter((a: string) => a !== amenity);
    }
  }

  submitProperty() {
    const propertyToSave = {...this.newProperty};
    
    // Provide fallback image if empty
    if (!propertyToSave.propertyimg) {
      propertyToSave.propertyimg = 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=600';
    }

    if (this.editingPropertyId) {
      propertyToSave.id = this.editingPropertyId;
      this.propertyService.updateProperty(propertyToSave);
    } else {
      propertyToSave.lat = 11.24 + (Math.random() * 0.04);
      propertyToSave.lng = 75.76 + (Math.random() * 0.04);
      this.propertyService.addProperty(propertyToSave);
    }
    
    this.showPropertyForm = false;
    this.resetForm();
    this.refreshProperties();
  }

  resetForm() {
    this.editingPropertyId = null;
    this.newProperty = {
        title: '', location: '', price: null, bedroom: null, bathroom: null,
        propertytype: 'house', lookingfor: 'buy', propertyimg: '',
        amenities: [], images: []
    };
  }
}
