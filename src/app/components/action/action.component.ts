import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('loginType') === '1' || localStorage.getItem('loginType') === '1') {
      this.route.navigate(['admin']);
    } else if (sessionStorage.getItem('loginType') === '2' || localStorage.getItem('loginType') === '2') {
      this.route.navigate(['driver']);
    } else {
      this.route.navigate(['login']);
    }
  }

}
