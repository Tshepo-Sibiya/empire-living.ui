import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'empire-living-ui';
  isMobileMenuOpen = false;

  // Search Filter Controls
  searchLocation = 'All Locations';
  searchType = 'All Types';
  searchPriceRange = 'All Prices';

  // Category filter
  activeCategory: string = 'All';

  // Properties Data
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

  // Pre-Approval Bond Calculator
  calcPropertyPrice: number = 2500000;
  calcDeposit: number = 250000;
  calcInterestRate: number = 11.75;
  calcLoanYears: number = 20;

  preAppForm = {
    fullName: '',
    email: '',
    phone: '',
    monthlyIncome: 65000,
    employmentStatus: 'Employed (Full-Time)',
    submitted: false
  };

  // Contact Form
  contactForm = {
    name: '',
    email: '',
    phone: '',
    interest: 'Renting Luxury Property',
    message: '',
    submitted: false
  };

  // Viewing Request Modal
  selectedProperty: Property | null = null;
  viewingForm = {
    name: '',
    phone: '',
    date: '',
    notes: '',
    submitted: false
  };

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }

  get filteredProperties(): Property[] {
    return this.properties.filter(p => {
      // Category filter
      if (this.activeCategory !== 'All' && p.type !== this.activeCategory) {
        return false;
      }
      // Location filter
      if (this.searchLocation !== 'All Locations' && !p.location.includes(this.searchLocation)) {
        return false;
      }
      // Type filter
      if (this.searchType !== 'All Types' && p.type !== this.searchType) {
        return false;
      }
      // Price filter
      if (this.searchPriceRange === '< R30k' && p.price >= 30000) return false;
      if (this.searchPriceRange === 'R30k - R50k' && (p.price < 30000 || p.price > 50000)) return false;
      if (this.searchPriceRange === '> R50k' && p.price <= 50000) return false;

      return true;
    });
  }

  // Monthly bond payment calculation formula
  get monthlyRepayment(): number {
    const principal = Math.max(0, this.calcPropertyPrice - this.calcDeposit);
    if (principal <= 0) return 0;
    const monthlyRate = (this.calcInterestRate / 100) / 12;
    const numberOfPayments = this.calcLoanYears * 12;
    
    if (monthlyRate === 0) return principal / numberOfPayments;

    const repayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(repayment);
  }

  get loanAmount(): number {
    return Math.max(0, this.calcPropertyPrice - this.calcDeposit);
  }

  get totalRepayment(): number {
    return this.monthlyRepayment * (this.calcLoanYears * 12);
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

  submitPreAppForm() {
    this.preAppForm.submitted = true;
  }

  submitContactForm() {
    this.contactForm.submitted = true;
  }
}
