import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  stats = [
    { number: '15+', label: 'Years Of Excellence' },
    { number: 'R2.5B+', label: 'Property Portfolio' },
    { number: '1,200+', label: 'Corporate Tenants' },
    { number: '99.4%', label: 'Occupancy Rate' }
  ];

  executives = [
    { name: 'Alexander Vance', title: 'Managing Director & Founder', bio: '18 years in luxury real estate investment and high-yield property structuring across Sub-Saharan Africa.', image: 'assets/images/hero_mansion.png' },
    { name: 'Clarissa Montgomery', title: 'Head of Portfolio Management', bio: 'Specialist in high-net-worth client asset management, corporate leasing, and legal compliance.', image: 'assets/images/penthouse.png' },
    { name: 'Thabo Mokoena', title: 'Director of Tenant Relations', bio: 'Expert in corporate tenant vetting, lease negotiation, and luxury property conciergellerie.', image: 'assets/images/villa.png' }
  ];
}
