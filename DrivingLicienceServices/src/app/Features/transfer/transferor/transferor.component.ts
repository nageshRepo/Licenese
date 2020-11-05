import { Component, Input, OnInit } from '@angular/core';
import { TrasnferorDetails } from '../../applyLicenseModel';

@Component({
  selector: 'app-transferor',
  templateUrl: './transferor.component.html',
  styleUrls: ['./transferor.component.css']
})
export class TransferorComponent implements OnInit {
  @Input() public headerDetails: string;
  @Input() public transfrorDetails: TrasnferorDetails;
  constructor() { }

  ngOnInit() {
  }


}
