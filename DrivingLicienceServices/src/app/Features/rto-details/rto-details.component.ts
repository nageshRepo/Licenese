import { Component, Input, OnInit } from '@angular/core';
import { rtoDetails } from '../applyLicenseModel';

@Component({
  selector: 'app-rto-details',
  templateUrl: './rto-details.component.html',
  styleUrls: ['./rto-details.component.css']
})
export class RtoDetailsComponent implements OnInit {

  @Input() rtoDetails: rtoDetails;
  constructor() { }

  ngOnInit() {
  }

}
