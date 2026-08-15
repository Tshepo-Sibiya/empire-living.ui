import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services = [
    {
      id: 'srv-1',
      icon: 'fa-solid fa-building-circle-check',
      title: 'Full Property Management',
      summary: 'Turnkey oversight for luxury apartment blocks, sky penthouses, and private golf estate villas.',
      features: [
        '24/7 emergency artisan and maintenance dispatch',
        'Automated monthly rental collection & financial statements',
        'Routine digital property inspection audits with high-res photos',
        'Preventative maintenance planning to safeguard long-term value'
      ]
    },
    {
      id: 'srv-2',
      icon: 'fa-solid fa-user-shield',
      title: 'Corporate Tenant Placement',
      summary: 'Screening and placing high-caliber corporate executives, diplomats, and multinational firm employees.',
      features: [
        'Stringent credit scoring, employer reference & FICA verification',
        'Bespoke corporate lease agreement drafting',
        'Diplomatic clause & embassy lease structuring',
        'Guaranteed zero-default risk vetting protocols'
      ]
    },
    {
      id: 'srv-3',
      icon: 'fa-solid fa-chart-line',
      title: 'Asset Valuation & Yield Optimization',
      summary: 'In-depth market intelligence to maximize rental returns and capital growth across Sandton and Rosebank.',
      features: [
        'Comparative rental market analysis (CMA)',
        'Strategic renovation advisory for higher rental yield',
        'Portfolio growth strategy and tax-efficient structuring',
        'Quarterly market benchmarking reports'
      ]
    },
    {
      id: 'srv-4',
      icon: 'fa-solid fa-handshake-angle',
      title: 'Corporate Housing & Leasing',
      summary: 'Turnkey fully furnished luxury residences for short, medium, and long-term corporate relocations.',
      features: [
        'Fully serviced luxury suites with fiber & backup power',
        'Flexible lease terms tailored for multinational projects',
        'Housekeeping, linen changes & private chef arrangements',
        'Single monthly consolidated billing for corporate HR'
      ]
    },
    {
      id: 'srv-5',
      icon: 'fa-solid fa-calculator',
      title: 'Pre-Approval & Bond Advisory',
      summary: 'Financial pre-qualification and bond origination with South Africa’s major banking institutions.',
      features: [
        'Multi-bank submission for competitive interest rates',
        'Affordability calculation and pre-approval certificates',
        'Guidance on transfer duties, legal fees, and bond costs',
        'Dedicated mortgage specialist consultation'
      ]
    },
    {
      id: 'srv-6',
      icon: 'fa-solid fa-scale-balanced',
      title: 'Legal & Rental Housing Compliance',
      summary: 'Navigating South African Rental Housing Act compliance, dispute resolution, and legal protection.',
      features: [
        'Compliance with Rental Housing Tribunal regulations',
        'Legal eviction and default recovery protection',
        'TPN credit bureau reporting integration',
        'Compliant interest-bearing deposit trust accounts'
      ]
    }
  ];
}
