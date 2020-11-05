import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  public regCertificate: string;
  public insuranceCertficate: string;
  public emmissionCertificate: string;
  public noObjection: string;
  public transfereeAadhar: string;
  public transferorAadhar: string;
  constructor() { }

  ngOnInit() {
  }

}
