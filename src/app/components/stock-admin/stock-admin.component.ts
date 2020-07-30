import {Component, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from './modal-content/modal-content.component';
import {Stock} from "../../models/stock";

@Component({
  selector: 'app-stock-admin',
  templateUrl: './stock-admin.component.html',
  styleUrls: ['./stock-admin.component.css']
})
export class StockAdminComponent implements OnInit {

  stocks: Stock;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit(): void {
  }

  openModal() {
    this.stocks =   {name: 'stock2', bought: '566', qty: '24', remaining: '64563'};

    const modalRef = this.modalService.open(ModalContentComponent, {size: 'md'});
    modalRef.componentInstance.title = 'This is a test modal';
    modalRef.componentInstance.data = this.stocks;
    modalRef.componentInstance.isUpdate = true;
    modalRef.componentInstance.onSave.subscribe(res => {
      console.log(res);
      modalRef.close();
    });
  }

}
