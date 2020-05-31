import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-business-hours-list',
  templateUrl: './business-hours-list.page.html',
  styleUrls: ['./business-hours-list.page.scss'],
})
export class BusinessHoursListPage implements OnInit {
  businessHours: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {

    this.businessHours.push({
      day: 'Segunda-feira',
      start: '18:00',
      end:'24:00'
    });

    this.businessHours.push({
      day: 'Terça-feira',
      start: '18:00',
      end:'24:00'
    });

    this.businessHours.push({
      day: 'Quarta-feira',
      start: '18:00',
      end:'24:00'
    });

    this.businessHours.push({
      day: 'Segunda-feira',
      start: '08:00',
      end:'12:00'
    });

    this.businessHours.push({
      day: 'Sexta-feira',
      start: '13:00',
      end:'18:00'
    });
  }

  remove(businessHour: any) {
    this.alert.showConfirmDelete(businessHour.day, () => this.executeRemove(businessHour) );
  }

  private executeRemove(businessHours: any) {
    try {
      // chamar a API para remover

      // remove da lista
      const index = this.businessHours.indexOf(businessHours);
      this.businessHours.splice(index, 1);

      this.toast.showSuccess('Horário excluído com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao excluir o horário');
    }
  }

}
