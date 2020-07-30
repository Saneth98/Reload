import {Component, OnInit} from '@angular/core';
import {City} from '../../models/city';
import {Bank} from '../../models/bank';
import {Expense} from '../../models/expense';
import {Card} from '../../models/card';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  filterCity;
  filterBank;
  filterExpense;
  filterCard;
  cities: City[];
  banks: Bank[];
  cards: Card[];
  idForm = true;
  expenses: Expense[];

  formAction = 'Add';
  formName = '';
  name; accountNo; sale; id; item; cost;

  constructor() {
  }

  ngOnInit(): void {
    this.cities = [
      {name: 'Gampaha', id: '1231563'},
      {name: 'Colombo', id: '1231563'}
    ];
    this.expenses = [
      {name: 'Fuel', id: '1231563'},
      {name: 'Food', id: '2458676'}
    ];
    this.banks = [
      {accountNo: '87534186468', name: 'Commercial Bank', id: '1231563'},
      {accountNo: '65595965968', name: 'NTB', id: '1231563'}
    ];

    this.cards = [
      {name: 'Kit Card', id: '1231563', cost: '47', item: '50', sale: '48'},
      {name: 'Kit Card', id: '2458676', cost: '900', item: '1000', sale: '930'}
    ];
  }

  editCity(city) {
    this.name = city.name;
    this.id = city.id;
  }

  deleteCity(city) {
  }

  editBank(bank) {
    this.name = bank.name;
    this.id = bank.id;
    this.accountNo = bank.accountNo;
  }

  deleteBank(bank) {
  }

  editCard(card) {
    this.name = card.name;
    this.id = card.id;
    this.item = card.item;
    this.cost = card.cost;
    this.sale = card.sale;
  }

  deleteCard(card) {
  }

  editExpense(expense) {
    this.id = expense.id;
    this.name = expense.name;
  }

  deleteExpense(expense) {
  }

  add(form: NgForm) {
    if (this.formAction === 'Add') {
      if (this.formName === 'City') {
        const city: City = {} as City;
        city.name = form.value.name;
        this.cities.push(city);
        console.log('Add city', city);
      }
      if (this.formName === 'Expense') {
        const expense: Expense = {} as Expense;
        expense.name = form.value.name;
        this.expenses.push(expense);
        console.log('Add Expense', expense);

      }
      if (this.formName === 'Bank') {
        const bank: Bank = {} as Bank;
        bank.name = form.value.name;
        bank.accountNo = form.value.accountNo;
        this.banks.push(bank);
        console.log('Add Bank', bank);

      }
      if (this.formName === 'Card') {
        const card: Card = {} as Card;
        card.name = form.value.name;
        card.sale = form.value.sale;
        card.cost = form.value.cost;
        card.item = form.value.item;
        this.cards.push(card);
        console.log('Add Card', card);
      }
    } else {
      if (this.formName === 'City') {
        const city: City = {} as City;
        city.name = form.value.name;
        city.id = form.value.id;
        console.log('Edit city', city);
      }
      if (this.formName === 'Expense') {
        const expense: Expense = {} as Expense;
        expense.name = form.value.name;
        expense.id = form.value.id;
        console.log('Edit Expense', expense);

      }
      if (this.formName === 'Bank') {
        const bank: Bank = {} as Bank;
        bank.id = form.value.id;
        bank.name = form.value.name;
        bank.accountNo = form.value.accountNo;
        console.log('Edit Bank', bank);

      }
      if (this.formName === 'Card') {
        const card: Card = {} as Card;
        card.name = form.value.name;
        card.id = form.value.id;
        card.sale = form.value.sale;
        card.cost = form.value.cost;
        card.item = form.value.item;
        console.log('Edit Card', card);
      }
    }
    form.resetForm();
    setTimeout(() => document.getElementById('modalToggle').click(), 500);

  }

}
