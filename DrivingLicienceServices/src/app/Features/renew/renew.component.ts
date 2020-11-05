import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { RenewModel } from '../applyLicenseModel';

@Component({
  selector: 'app-renew',
  templateUrl: './renew.component.html',
  styleUrls: ['./renew.component.css']
})
export class RenewComponent implements OnInit {

  public renewDetails = new RenewModel();
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  sublitApplication() {
    console.log(this.renewDetails);
    this.messageService.add({ severity: 'info', summary: 'Renew license', detail: 'Request submitted successfully' });
  }
}
