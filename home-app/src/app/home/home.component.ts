import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housing-location';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="result">
    <app-housing-location *ngFor="let housingLocation
    of housingLocation" [housingLocation]
    ="housingLocation"></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingLocation: HousingLocation[] = [
    {
      id: 0,
      name: "Citra Grand City",
      city: "Palembang",
      state: "ID",
      photo: "https://incomerealty.id/wp-content/uploads/2022/09/Dijual-Rumah-Citra-Grand-City-1.jpeg",
      availableUnits: 12,
      wifi: true,
      laundry: true
    },
    {
      id: 1,
      name: "Citra Land",
      city: "Palembang",
      state: "ID",
      photo: "https://incomerealty.id/wp-content/uploads/2023/10/DIJUAL-RUMAH-KOMPLEK-FORTUNATE-PARK-CITRA-GRAND-CITY-PALEMBANG-03.jpg",
      availableUnits: 12,
      wifi: true,
      laundry: true 
    }
  ];
}
