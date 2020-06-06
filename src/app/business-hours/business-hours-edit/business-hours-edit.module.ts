import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusinessHoursEditPageRoutingModule } from './business-hours-edit-routing.module';

import { BusinessHoursEditPage } from './business-hours-edit.page';
import { SharedModule } from 'src/app/core/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessHoursEditPageRoutingModule,
    SharedModule
  ],
  declarations: [BusinessHoursEditPage]
})
export class BusinessHoursEditPageModule {}
