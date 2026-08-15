import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent implements OnInit {
  searchLocation = 'All Locations';
  searchType = 'All Types';
  searchPriceRange = 'All Prices';
  activeCategory: string = 'All';

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
    },
    {
      id: 'prop-4',
      title: 'Houghton Ridge Contemporary Mansion',
      location: 'Houghton Estate, Johannesburg',
      price: 95000,
      type: 'Villa',
      beds: 6,
      baths: 6.5,
      garage: 4,
      areaSqM: 820,
      image: 'assets/images/hero_mansion.png',
      badge: 'Exclusive',
      featured: false,
      description: 'Prestige living offering complete off-grid capabilities, heated infinity pool, wine cellar, and separate staff quarters.'
    }
  ];

  selectedProperty: Property | null = null;
  viewingForm = {
    name: '',
    phone: '',
    date: '',
    notes: '',
    submitted: false
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['location']) this.searchLocation = params['location'];
      if (params['type']) this.searchType = params['type'];
      if (params['price']) this.searchPriceRange = params['price'];
    });
  }

  setCategory(cat: string) {
    this.activeCategory = cat;
  }

  get filteredProperties(): Property[] {
    return this.properties.filter(p => {
      if (this.activeCategory !== 'All' && p.type !== this.activeCategory) return false;
      if (this.searchLocation !== 'All Locations' && !p.location.includes(this.searchLocation)) return false;
      if (this.searchType !== 'All Types' && p.type !== this.searchType) return false;
      if (this.searchPriceRange === '< R30k' && p.price >= 30000) return false;
      if (this.searchPriceRange === 'R30k - R50k' && (p.price < 30000 || p.price > 50000)) return false;
      if (this.searchPriceRange === '> R50k' && p.price <= 50000) return false;
      return true;
    });
  }

  openViewingModal(property: Property) {
    this.selectedProperty = property;
    this.viewingForm.submitted = false;
  }

  closeViewingModal() {
    this.selectedProperty = null;
  }

  submitViewingForm() {
    this.viewingForm.submitted = true;
    setTimeout(() => {
      this.closeViewingModal();
    }, 2500);
  }
}
