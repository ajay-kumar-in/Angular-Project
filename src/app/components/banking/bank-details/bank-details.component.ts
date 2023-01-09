import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { BankModel } from 'src/app/shared/models/bank-details/bank';
import { BankingService } from '../services/banking.service';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.scss']
})
export class BankDetailsComponent implements OnInit {
  banks: BankModel[] = [];
  banksCopyTemp: BankModel[] = [];
  banksCopy: BankModel[] = [];
  cityNameForm: any;
  cities: string[] = ['DELHI', 'MUMBAI', 'GURGAON', 'PUNE'];
  perPageBankCount: number = 10

  constructor(
    private bankingService: BankingService
  ) { }

  ngOnInit(): void {
    this.cityNameForm = new UntypedFormGroup({
      city: new UntypedFormControl('DELHI')
    });

    this.getBankDetails();
  }

  getBankDetails() {
    const city = this.cityNameForm.get('city').value;    
    this.bankingService.getBankDetails(city).subscribe(res=> {
      if(res !== undefined && res) {
        this.banks = res.slice(0, 10);
        this.banksCopy = res;
      }
    });
  }

  searchByBranch(branctTxt: string) {
    this.banks = [...this.banksCopy];
    this.banks = this.banks.filter(bank=> bank.branch.toLowerCase().includes(branctTxt.toLowerCase()));
    if(branctTxt.length <= 0) {
      this.banks = this.banksCopy.slice(this.perPageBankCount - 10, this.perPageBankCount)
    }
  }

  searchByAddress(addressTxt: string) {
    this.banks = [...this.banksCopy];
    this.banks = this.banks.filter(bank=> bank.address.toLowerCase().includes(addressTxt.toLowerCase()));
    if(addressTxt.length <= 0) {
      this.banks = this.banksCopy.slice(this.perPageBankCount - 10, this.perPageBankCount)
    }
  }

  searchByCity(cityTxt: string) {
    this.banks = [...this.banksCopy];
    this.banks = this.banks.filter(bank=> bank.city.toLowerCase().includes(cityTxt.toLowerCase()));
    if(cityTxt.length <= 0) {
      this.banks = this.banksCopy.slice(this.perPageBankCount - 10, this.perPageBankCount)
    }
  }

  goToPreviousPage() {
    if(this.perPageBankCount <= 10) return
    this.perPageBankCount -= 10;
    this.banks = this.banksCopy.slice(this.perPageBankCount - 10, this.perPageBankCount);
  }

  goToNextPage() {
    if(this.perPageBankCount >= this.banksCopy.length) return;
    this.perPageBankCount += 10;
    this.banks = this.banksCopy.slice(this.perPageBankCount -10, this.perPageBankCount);
  }

}
