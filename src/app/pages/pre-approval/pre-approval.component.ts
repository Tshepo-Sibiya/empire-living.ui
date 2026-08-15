import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pre-approval',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pre-approval.component.html',
  styleUrl: './pre-approval.component.css'
})
export class PreApprovalComponent {
  // Bond Calculator Inputs
  calcPropertyPrice: number = 2500000;
  calcDeposit: number = 250000;
  calcInterestRate: number = 11.75;
  calcLoanYears: number = 20;

  // Form Model
  preAppForm = {
    fullName: '',
    email: '',
    phone: '',
    monthlyIncome: 65000,
    employmentStatus: 'Employed (Full-Time)',
    submitted: false
  };

  get loanAmount(): number {
    return Math.max(0, this.calcPropertyPrice - this.calcDeposit);
  }

  get monthlyRepayment(): number {
    const principal = this.loanAmount;
    if (principal <= 0) return 0;
    const monthlyRate = (this.calcInterestRate / 100) / 12;
    const numberOfPayments = this.calcLoanYears * 12;
    if (monthlyRate === 0) return principal / numberOfPayments;

    const repayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
                      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    return Math.round(repayment);
  }

  get totalRepayment(): number {
    return this.monthlyRepayment * (this.calcLoanYears * 12);
  }

  submitPreAppForm() {
    this.preAppForm.submitted = true;
  }
}
