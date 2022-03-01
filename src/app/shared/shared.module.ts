import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ThemePipe } from './pipes/theme.pipe';
import { ErrorPageComponent } from './error-page/error-page.component';



@NgModule({
  declarations: [
    MenuComponent,
    ThemePipe,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    MenuComponent
  ]
})
export class SharedModule { }
