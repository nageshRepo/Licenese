import { Component, OnInit } from '@angular/core';
import { DocumentDetails } from '../applyLicenseModel';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.css']
})
export class DocumentDetailsComponent implements OnInit {

  public documentdetails = new DocumentDetails();
  constructor() { }

  ngOnInit() {
  }

}
