import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor() { }  

  private listDeliciousDishes = [    
    "Batería",
    "Bujías",
    "Cable de bujía",
    "Rolineras",
    "Amortiguadores",
    "Anillos",
    "Pistones",
    "Buje",
    "Árbol de leva",
    "Alternador",
    "Kit cadena de tiempo",
    "Retrovisor"
  ];
  public button: any = this.listDeliciousDishes.slice(0,6);

  searchValue (event:any){
    this.button = this.listDeliciousDishes.filter((valor: string) => (valor.toLowerCase().indexOf(event.value) >-1) );    
    if (this.button.length==0) {      
      this.button = this.listDeliciousDishes.filter((valor: string) => (valor.indexOf(event.value) >-1) );
    }
    this.button = this.button.slice(0,6);
    if (event.value == "" || event.value == null) {
      this.button = this.listDeliciousDishes.slice(0,6);
    }
  }

  menuItems = [    
    {
      label: 'About',
      icon: 'help',
      showOnMobile: false,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Sign Up',
      icon: 'login',
      showOnMobile: true,
      showOnTablet: true,
      showOnDesktop: true
    },
    {
      label: 'Showcase',
      icon: 'slideshow',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
    {
      label: 'Blog',
      icon: 'rss_feed',
      showOnMobile: false,
      showOnTablet: false,
      showOnDesktop: false
    },
  ];

  ngOnInit(): void {
  }

}
