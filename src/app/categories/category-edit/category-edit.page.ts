import { Component, OnInit } from '@angular/core';
import { ToastService } from './../../core/services/toast.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.page.html',
  styleUrls: ['./category-edit.page.scss'],
})
export class CategoryEditPage implements OnInit {

  title = 'Nova Categoria';

  constructor(
    private toast: ToastService
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    try {
      // chamar a API
      this.toast.showSuccess('Categoria cadastrada com sucesso')
    } catch (error) {
      this.toast.showError('Erro ao cadastrar a categoria');
    }
  }

}
