import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNg
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {TableModule} from 'primeng/table';
import {DividerModule} from 'primeng/divider';
import {AccordionModule} from 'primeng/accordion';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';
import {DialogModule} from 'primeng/dialog';
import {CheckboxModule} from 'primeng/checkbox';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    CalendarModule,
    MenubarModule,
    TableModule,
    DividerModule,
    AccordionModule,
    DropdownModule,
    InputTextModule,
    ToastModule,
    DialogModule,
    CheckboxModule,
    ConfirmDialogModule
  ]
})
export class PrimeNgModule { }
