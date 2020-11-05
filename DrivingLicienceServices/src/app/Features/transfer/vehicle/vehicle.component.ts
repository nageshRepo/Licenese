import { Component, Input, OnInit } from '@angular/core';
import { Vehicledetails } from '../../applyLicenseModel';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  @Input() public vehicleDetails: Vehicledetails;

  constructor() { }

  ngOnInit() {
  }

}
