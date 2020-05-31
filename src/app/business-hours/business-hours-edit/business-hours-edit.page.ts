import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-business-hours-edit',
  templateUrl: './business-hours-edit.page.html',
  styleUrls: ['./business-hours-edit.page.scss'],
})
export class BusinessHoursEditPage implements OnInit {
  title = 'Horário de Funcionamento';

  daysOfWeek: any[] = [
    'Segunda-feira',
    'Terça-feira',
    'Quarta-feira',
    'Quinta-feira',
    'Sexta-feira',
    'Sábado',
    'Domingo'
  ];

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a API
      this.toast.showSuccess('Horário cadastrado com sucesso')
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o horário');
    }
  }

}
