import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../property';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-property-details',
  imports: [CommonModule],
  templateUrl: './property-details.html',
  styleUrl: './property-details.css',
})
export class PropertyDetails {
  property: any;
  mainImage: string = '';

  constructor(
    private propertyService: PropertyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.property = this.propertyService.selectedProperty;
    if (!this.property) {
      this.router.navigate(['/home']);
    } else {
      this.mainImage = this.property.propertyimg;
    }
  }

  goBack() {
    this.router.navigate(['/home']);
  }

  setMainImage(img: string) {
    this.mainImage = img;
  }
}
