import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {EndStock} from '../../models/endStock';
import {DomSanitizer} from '@angular/platform-browser';
import jsPDF from 'jspdf';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {Observable, of, Subject, merge} from 'rxjs';
import {NgbAccordionConfig, NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';

interface Option {
  name: any;
  qty: any;
}

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})

export class DriverComponent implements OnInit {
  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  test1 = true;
  pendingMessage = '';
  pendingMessageColour = '';
  link = '';
  imgBase64;
  PMTempFail = true;
  stockEnd: EndStock;
  userName;
  expenses: { expense: string, amount: number }[] = [];
  imgURL: any;
  bankList = [
    {name: 'Commercial Bank', amount: '', slipNo: ''},
    {name: 'NTB Bank', amount: '', slipNo: ''},
    {name: 'BOC Bank', amount: '', slipNo: ''},
  ];

  list = [
    {name: 'Int 99', qty: 122},
    {name: 'Int 49', qty: 54},
    {name: 'Reload 100', qty: 456},
    {name: 'Int 199', qty: 54},
    {name: 'Int 322', qty: 45},
  ];
  Rlist = [
    {name: 'Int 99', qty: 122},
    {name: 'Int 49', qty: 54},
    {name: 'Reload 100', qty: 456},
    {name: 'Int 199', qty: 54},
    {name: 'Int 322', qty: 55},
  ];

  expenseList = [
    'Staff Welfaire', 'Stationery', 'Account Fee', 'Office Maintain', 'Insuarance', 'Telephone', 'Postage',
    'Income Tax', 'Overdraft Interest', 'Elecricity -0506790306', 'Elecricity -0507162502',
    'Retailer Commission', 'Bank Charges', 'EPF', 'ETF', 'Travaling & Transport', 'Discount',
    'Donation', 'Fuel & Maintain', 'BGO 1019', 'BGO 1052', 'BGO 1043', 'BGO 1069', 'BGO 1024',
    'BGO 1065', 'BGO 1014', 'BGO 1056', 'BGO 1035', 'BDT 1090',
    'BDT 1098', 'BDT 1104', 'BAR 6748', 'CAW 4647', 'PJ 5178', 'KM 2229'];

  focus: Subject<string> = new Subject();
  click: Subject<string> = new Subject();

  // textStr: Subject<string> = new Subject();


  constructor(private domSanitizer: DomSanitizer, config: NgbAccordionConfig) {
    config.type = 'light';
  }

  ngOnInit(): void {
    if (localStorage.getItem('userName') !== '') {
      this.userName = localStorage.getItem('userName');
    } else {
      this.userName = sessionStorage.getItem('userName');
    }
    if (this.PMTempFail) {
      this.pendingMessage = 'Your last Proposal was Rejected Due to the reason of Incorrect Slip number';
      this.pendingMessageColour = 'alert-danger';
      this.link = 'Click Here';
    } else {
      this.pendingMessage = 'Your last Proposal was Approved';
      this.pendingMessageColour = 'alert-success';
    }

    this.expenses.push({expense: '', amount: null});
  }

  // formatter = (option: { name: string }) => option.name;
  // search = (text: Observable<string>) =>
  //   merge(text, this.focus, this.click).pipe(
  //     map(term => term === '' ? this.expenseList
  //       : this.expenseList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1))
  //   )

  // Type head Search Function
  search = (text: Observable<string>) => {
    const debouncedText$ = text.pipe(debounceTime(200), distinctUntilChanged());
    const inputFocus$ = this.focus;

    return merge(debouncedText$, inputFocus$).pipe(
      map(term => (term === '' ? this.expenseList
        : this.expenseList.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)))
    );
  }

  // buy stock modal save and upload data
  buyStock() {
    console.log(this.list);
  }

  // summary modal save and upload data
  confirmSale() {
    console.log(this.stockEnd);
  }

  // Add new expense
  addNewExpense() {
    this.expenses.push({expense: '', amount: null});
  }

  // convert image to base64
  onFileChanges(event) {
    this.imgBase64 = (event[0].base64);
    this.imgURL = this.domSanitizer.bypassSecurityTrustResourceUrl(event[0].base64);
  }

  // validation in buy stock modal table
  valueChanged(e) {
    if (e.bought > e.qty) {
      e.bought = e.qty;
    }
  }

  // validation in end stock modal table
  valueChanged1(e) {
    if (e.remaining > e.qty) {
      e.remaining = e.qty;
    }
  }

  // stock end modal save
  stockEndSubmit(form: NgForm) {
    const dateFormat = require('dateformat');
    const now = new Date();
    const date = dateFormat(now, 'mmmm dS, yyyy, h:MM:ss TT');

    const endStock: EndStock = {} as EndStock;
    endStock.remainingStock = this.Rlist;
    endStock.banks = this.bankList;
    endStock.remainingCash = form.value.remainingCash;
    endStock.expenses = this.expenses;
    // endStock.bankSlipNo = form.value.slipNo;
    // endStock.bankSlipImg = this.imgBase64;
    endStock.notes = form.value.notes;
    endStock.date = date;
    this.stockEnd = endStock;

    // console.log(this.stockEnd, date);
    // console.log(this.stockEnd);
    // console.log(this.expenses);
    document.getElementById('btntoggle').click();
    // this.imgURL = this.domSanitizer.bypassSecurityTrustResourceUrl(endStock.bankSlipImg);
    setTimeout(() => document.getElementById('modalToggle').click(), 1000);
  }

  test() {
    this.test1 = false;
  }

  // public downloadAsPDF() {
  //   const doc = new jsPDF();
  //   const specialElementHandlers = {
  //     '#editor'(element, renderer) {
  //       return true;
  //     }
  //   };
  //   const pdfTable = this.pdfTable.nativeElement;
  //   doc.fromHTML(pdfTable.innerHTML, 15, 15, {
  //     width: 190, elementHandlers: specialElementHandlers
  //   });
  //   doc.save('tableToPdf.pdf');
  // }
}
