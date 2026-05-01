import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

// Fix marker icon (CDN version)
delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class Map implements AfterViewInit {

  map: any;
  markers: any[] = [];

  // Initial data (used only for first load)
  properties = [
    { id: 1, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000 },
    { id: 2, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000 },
    { id: 3, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000 }
  ];

  ngAfterViewInit(): void {

    // Create map
    this.map = L.map('map').setView([11.2588, 75.7804], 13);

    // Add tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Initial markers
    this.updateMarkers(this.properties);
  }

  // Remove old markers
  clearMarkers() {
    this.markers.forEach(marker => marker.remove());
    this.markers = [];
  }

  // ONLY display markers (no filtering here)
  updateMarkers(properties: any[]) {
    if (!this.map) return;

    this.clearMarkers();

    properties.forEach(property => {
      const marker = L.marker([property.lat, property.lng])
        .addTo(this.map)
        .bindPopup(`<b>${property.title}</b><br>₹${property.price}`);

      this.markers.push(marker);
    });
  }
}