import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    interest: 'Renting Luxury Property',
    message: '',
    submitted: false
  };

  offices = [
    {
      city: 'Sandton HQ',
      address: 'Level 14, The Sandton Towers, 5th St, Sandton Central',
      phone: '+27 11 884 9000',
      email: 'sandton@empireliving.co.za'
    },
    {
      city: 'Rosebank Advisory Office',
      address: 'The Zone Phase 2, Oxford Rd, Rosebank',
      phone: '+27 11 447 5500',
      email: 'rosebank@empireliving.co.za'
    },
    {
      city: 'Waterfall Estate Hub',
      address: 'Waterfall City Corporate Campus, Midrand',
      phone: '+27 10 590 1200',
      email: 'waterfall@empireliving.co.za'
    }
  ];

  submitContactForm() {
    this.contactForm.submitted = true;
  }
}
