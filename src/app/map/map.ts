import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';

// 🔥 Icons MUST be outside class
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

const highlightIcon = L.icon({
  iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
  iconSize: [30, 45],
  iconAnchor: [15, 45]
});

@Component({
  selector: 'app-map',
  templateUrl: './map.html',
  styleUrls: ['./map.css']
})
export class Map implements AfterViewInit {

  map: any;
  markers: any = {};

  properties = [
    { id: 1, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000 },
    { id: 2, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000 },
    { id: 3, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000 },
    { id: 4, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000 },
    { id: 5, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000 },
    { id: 6, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000 },
    { id: 7, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000 },
    { id: 8, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000 },
    { id: 9, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000 },
    { id: 10, title: 'House in Calicut', lat: 11.2588, lng: 75.7804, price: 25000 },
    { id: 11, title: 'Apartment near Beach', lat: 11.2605, lng: 75.7820, price: 35000 },
    { id: 12, title: 'Villa with Parking', lat: 11.2550, lng: 75.7780, price: 50000 }
  ];

  ngAfterViewInit(): void {
    this.map = L.map('map').setView([11.2588, 75.7804], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.updateMarkers(this.properties);
  }

  clearMarkers() {
    Object.values(this.markers).forEach((marker: any) => marker.remove());
    this.markers = {};
  }

  updateMarkers(properties: any[]) {
    if (!this.map) return;

    this.clearMarkers();

    properties.forEach(property => {
      const marker = L.marker([property.lat, property.lng], {
        icon: defaultIcon
      })
        .addTo(this.map)
        .bindPopup(`<b>${property.title}</b><br>₹${property.price}`);

      this.markers[property.id] = marker;
    });
  }

  // 🔥 Click → zoom + popup
  focusOnProperty(property: any) {
    const marker = this.markers[property.id];
    if (!marker) return;

    this.map.setView([property.lat, property.lng], 15);
    marker.openPopup();
  }

  // 🔥 Hover → highlight marker
 highlightMarker(property: any) {
  this.resetMarkers(); // 🔥 reset first

  const marker = this.markers[property.id];
  if (!marker) return;

  marker.setIcon(highlightIcon);
  marker.openPopup();
}

  // 🔥 Reset all markers
  resetMarkers() {
    Object.values(this.markers).forEach((marker: any) => {
      marker.setIcon(defaultIcon);
    });
  }
}