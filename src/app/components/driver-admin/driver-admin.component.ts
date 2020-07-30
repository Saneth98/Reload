import {Component, OnInit, Pipe} from '@angular/core';
import {Driver} from '../../models/driver';
import {NgForm} from '@angular/forms';
import {DriverSales} from '../../models/driverSales';

@Component({
  selector: 'app-driver-admin',
  templateUrl: './driver-admin.component.html',
  styleUrls: ['./driver-admin.component.css']
})
export class DriverAdminComponent implements OnInit {

  constructor() {
  }

  drivers: Driver[];
  sales: DriverSales[];
  districts;
  filterName;
  driverName;
  driverEmail;
  driverNic;
  driverCity;
  formAction = 'Add';

  ngOnInit(): void {
    this.drivers = [
      {name: 'john', city: 'gampaha', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'ashan', city: 'gampaha', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'piyalk', city: 'gampaha', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'marry', city: 'colombo', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'marry', city: 'colombo', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'marry', city: 'colombo', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'marry', city: 'colombo', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'marry', city: 'colombo', email: 'driver@gmil.com', nic: '64564654654v'},
      {name: 'tehjabn', city: 'matara', email: 'driver@gmil.com', nic: '64564654654v'},
    ];
    this.districts = ['gampaha', 'colombo', 'matara', 'trinco'];
  }

  // display driver infomation
  selectedDriver(name) {
    this.driverName = name;
    this.sales = [
      {driverName: 'john', id: '54594564', date: '2020/1/22'},
      {driverName: 'john', id: '86745648', date: '2020/1/22'},
    ];
  }

  // add and update a driver
  addDriver(form: NgForm) {
    console.log('form');
    console.log(form.value);
    form.resetForm();
    document.getElementById('btntoggle').click();
  }

  // edit driver
  editDriver(driver: Driver) {
    this.formAction = 'Edit';
    this.driverName = driver.name;
    this.driverCity = driver.city;
    this.driverEmail = driver.email;
    this.driverNic = driver.nic;
  }

  // delete driver
  deleteDriver() {
    console.log('delete');
  }
}
