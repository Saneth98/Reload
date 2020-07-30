import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {NgbActiveModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {NgForm} from '@angular/forms';
import {Stock} from "../../../models/stock";

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  title = '';
  isUpdate = false;
  data: Stock;
  onSave = new Subject();

  constructor(private modalRef: NgbActiveModal) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  close() {
    this.modalRef.close();
  }

  saveChanges(form: NgForm) {
    this.onSave.next(form.value);
  }

}
