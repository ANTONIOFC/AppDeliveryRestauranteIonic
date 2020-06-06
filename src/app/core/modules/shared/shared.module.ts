import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ValidationContainerComponent } from '../../components/validation-container/validation-container.component';
import { MinValueValidatorDirective } from './../../directives/min-value-validator.directive';



@NgModule({
  declarations: [
    ValidationContainerComponent,
    MinValueValidatorDirective
  ],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [
    ValidationContainerComponent,
    MinValueValidatorDirective
  ]
})
export class SharedModule { }
