import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { TransferDetails } from '../applyLicenseModel';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent implements OnInit {
  public transferorHeader = 'Transferor details';
  public transfereeHeader = 'Transferee details';
  public transferDetails = new TransferDetails();
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  public sublitApplication(){
    console.log(this.transferDetails);
    this.messageService.add({ severity: 'info', summary: 'Renew license', detail: 'Request submitted successfully' });
  }

}
