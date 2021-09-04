import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  main_logo = 'assets/images/logo.png';

  currentNav = 'Onboarding';

  constructor() { }

  ngOnInit(): void {
  }

}
