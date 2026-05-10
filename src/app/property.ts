import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PropertyService {
  selectedProperty: any = null;
  userImages : string[] =[];
  private properties = [
    { id: 1, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000, location: 'Calicut', bedroom: 3, bathroom: 3, sqft: 2000, yearBuilt: 2015, propertytype: "house", lookingfor: "buy", propertyimg: "assets/house1.jpg", images: ["assets/house1.jpg", "assets/house2.jpg", "assets/house3.jpg"], amenities: ['pool', 'wifi', 'pet friendly'] },
    { id: 2, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000, location: 'Calicut', bedroom: 2, bathroom: 2, sqft: 1200, yearBuilt: 2020, propertytype: "apartment", lookingfor: "rent", propertyimg: "assets/house2.jpg", images: ["assets/house2.jpg", "assets/house3.jpg", "assets/house1.jpg"], amenities: ['wifi'] },
    { id: 3, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000, location: 'Calicut', bedroom: 4, bathroom: 4, sqft: 3500, yearBuilt: 2018, propertytype: "villa", lookingfor: "buy", propertyimg: "assets/house3.jpg", images: ["assets/house3.jpg", "assets/house1.jpg", "assets/house2.jpg"], amenities: ['parking', 'wifi', 'pool'] },
    { id: 4, title: 'House near Railway Station', lat: 11.2450, lng: 75.7700, price: 45000, location: 'Tvm', bedroom: 3, bathroom: 2, sqft: 1800, yearBuilt: 2010, propertytype: "house", lookingfor: "rent", propertyimg: "assets/house1.jpg", images: ["assets/house1.jpg", "assets/house2.jpg", "assets/house3.jpg"], amenities: ['wifi', 'parking'] },
    { id: 5, title: 'House near Hilite Mall', lat: 11.2500, lng: 75.7800, price: 80000, location: 'Kochi', bedroom: 4, bathroom: 4, sqft: 2500, yearBuilt: 2021, propertytype: "apartment", lookingfor: "buy", propertyimg: "assets/house2.jpg", images: ["assets/house2.jpg", "assets/house3.jpg", "assets/house1.jpg"], amenities: ['pool', 'gym'] },
    { id: 6, title: 'Luxury Villa in Kochi', lat: 11.2520, lng: 75.7750, price: 90000, location: 'Kochi', bedroom: 5, bathroom: 5, sqft: 4000, yearBuilt: 2022, propertytype: 'villa', lookingfor: 'buy', propertyimg: "assets/house3.jpg", images: ["assets/house3.jpg", "assets/house1.jpg", "assets/house2.jpg"], amenities: ['parking', 'pool', 'gym'] }
  ];

  getProperties() {
    return this.properties;
  }

  addProperty(property: any) {
    property.id = this.properties.length + 1;
    this.properties.unshift(property);
  }
}
