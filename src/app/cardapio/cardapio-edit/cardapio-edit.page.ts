import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../core/services/toast.service';

@Component({
  selector: 'app-cardapio-edit',
  templateUrl: './cardapio-edit.page.html',
  styleUrls: ['./cardapio-edit.page.scss'],
})
export class CardapioEditPage implements OnInit {

  title = 'Novo Produto';

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a API
      this.toast.showSuccess('Produto cadastrado com sucesso')
    } catch (error) {
      this.toast.showError('Erro ao cadastrar o produto');
    }
  }

}
