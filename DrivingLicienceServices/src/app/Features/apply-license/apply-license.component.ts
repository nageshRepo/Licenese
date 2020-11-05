import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { applyLicienseModel } from '../applyLicenseModel';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-apply-license',
  templateUrl: './apply-license.component.html',
  styleUrls: ['./apply-license.component.css']
})
export class ApplyLicenseComponent implements OnInit {

  @ViewChild('Toast') public toast: ElementRef;
  public applyLicenseDetails = new applyLicienseModel();
  public showToast = false;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    
  }

  sublitApplication() {
    console.log(this.applyLicenseDetails);
    this.messageService.add({ severity: 'info', summary: 'Apply license', detail: 'Request submitted successfully' });
  }

}
