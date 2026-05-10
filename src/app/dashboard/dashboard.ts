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
  
  isAddingProperty: boolean = false;
  
  newProperty: any = {
    title: '',
    location: '',
    price: null,
    bedroom: null,
    bathroom: null,
    propertytype: 'house',
    lookingfor: 'buy',
    propertyimg: 'assets/house1.jpg',
    amenities: [],
    images: []
  };

  constructor(private router: Router, private propertyService: PropertyService) {}

  ngOnInit() {
    this.properties = this.propertyService.getProperties();
  }

  changeSection(section: string) {
    this.activeSection = section;
    this.isAddingProperty = false;
  }

  logout() {
    this.router.navigate(['/home']);
  }

  openAddProperty() {
    this.isAddingProperty = true;
  }

  cancelAdd() {
    this.isAddingProperty = false;
    this.resetForm();
  }

  submitProperty() {
    this.propertyService.addProperty({...this.newProperty});
    this.isAddingProperty = false;
    this.resetForm();
    this.properties = this.propertyService.getProperties();
  }

  resetForm() {
    this.newProperty = {
        title: '', location: '', price: null, bedroom: null, bathroom: null,
        propertytype: 'house', lookingfor: 'buy', propertyimg: 'assets/house1.jpg',
        amenities: [], images: []
    };
  }
}
