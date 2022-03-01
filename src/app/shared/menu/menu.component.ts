import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];
  dark: boolean = false;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Jugadores',
        icon: 'pi pi-user',
        // items: [
        //   {
        //     label: 'Mostrar',
        //     routerLink: 'player/listado'
        //   },
        //   {
        //     label: 'Agregar',
        //     routerLink: 'player/add'
        //   }
        // ],
        routerLink:'player/listado'
      },
      {
        label: 'Equipos',
        icon: 'pi pi-users'
      },
      {
        label: 'Torneos',
        icon: 'pi pi-star-fill'
      }
    ];
  }

  changeTheme() {
    if (this.dark) {
      this.themeService.switchTheme('bootstrap-light');
      this.dark = false;
    } else {
      this.themeService.switchTheme('vela-green');
      this.dark = true;
    }

  }

}
