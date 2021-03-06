import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { interval, Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
   }

  ngOnInit() {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
