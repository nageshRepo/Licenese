import { Component, Input, OnInit } from '@angular/core';
import { RenewModel } from '../applyLicenseModel';

@Component({
  selector: 'app-dl-details',
  templateUrl: './dl-details.component.html',
  styleUrls: ['./dl-details.component.css']
})
export class DlDetailsComponent implements OnInit {

  @Input() public dlDetailsList: RenewModel;
  public dlPhoto: string;
  constructor() { }

  ngOnInit() {
  }

}
