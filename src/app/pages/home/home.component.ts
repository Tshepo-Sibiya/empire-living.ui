import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: 'Apartment' | 'Villa' | 'Penthouse' | 'Townhouse';
  beds: number;
  baths: number;
  garage: number;
  areaSqM: number;
  image: string;
  badge: 'To Rent' | 'For Sale' | 'Exclusive';
  featured: boolean;
  description: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  properties: Property[] = [
    {
      id: 'prop-1',
      title: 'The Sandton Sky Penthouse',
      location: 'Sandton Central, Johannesburg',
      price: 45000,
      type: 'Penthouse',
      beds: 3,
      baths: 3.5,
      garage: 2,
      areaSqM: 320,
      image: 'assets/images/penthouse.png',
      badge: 'To Rent',
      featured: true,
      description: 'Panoramic skyline views, private plunge pool, 24/7 concierge, state-of-the-art security, and bespoke finishings.'
    },
    {
      id: 'prop-2',
      title: 'Waterfall Executive Estate Villa',
      location: 'Waterfall Country Estate, Midrand',
      price: 68000,
      type: 'Villa',
      beds: 5,
      baths: 5,
      garage: 3,
      areaSqM: 580,
      image: 'assets/images/villa.png',
      badge: 'Exclusive',
      featured: true,
      description: 'Modern architectural marvel with integrated smart-home automation, eco-solar power system, and private landscaped garden.'
    },
    {
      id: 'prop-3',
      title: 'Rosebank Central Luxury Suite',
      location: 'Rosebank, Johannesburg',
      price: 28000,
      type: 'Apartment',
      beds: 2,
      baths: 2,
      garage: 1,
      areaSqM: 145,
      image: 'assets/images/apartment.png',
      badge: 'To Rent',
      featured: true,
      description: 'Sophisticated open-plan living within walking distance of Rosebank Gautrain station, fine dining, and boutique retail.'
    }
  ];
}
