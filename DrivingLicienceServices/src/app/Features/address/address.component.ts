import { Component, Input, OnInit } from '@angular/core';
import { AddressList } from '../applyLicenseModel';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  @Input() public addressDetails: AddressList;

  public checkboxValue = false;

  constructor() { }

  ngOnInit() {
  }

  onFilterChange(event) {
    if (this.checkboxValue) {
      this.addressDetails.premanentAddressDetails.city = this.addressDetails.presentAddressDetails.city;
      this.addressDetails.premanentAddressDetails.houseNo = this.addressDetails.presentAddressDetails.houseNo;
      this.addressDetails.premanentAddressDetails.location = this.addressDetails.presentAddressDetails.location;
      this.addressDetails.premanentAddressDetails.district = this.addressDetails.presentAddressDetails.district;
      this.addressDetails.premanentAddressDetails.state = this.addressDetails.presentAddressDetails.state;
      this.addressDetails.premanentAddressDetails.pin = this.addressDetails.presentAddressDetails.pin;
      this.addressDetails.premanentAddressDetails.street = this.addressDetails.presentAddressDetails.street;
    }
  }
}
