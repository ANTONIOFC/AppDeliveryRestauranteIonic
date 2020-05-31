import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  categories: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {

    for(let i=0;i<20; i++){
      const category = {
        id: i + 1,
        name: `Categoria ${i+1}`,
      };

      this.categories.push(category);
    }
  }

  remove(category: any) {
    this.alert.showConfirmDelete(category.name, () => this.executeRemove(category) );
  }

  private executeRemove(category: any) {
    try {
      // chamar a API para remover

      // remove da lista
      const index = this.categories.indexOf(category);
      this.categories.splice(index, 1);

      this.toast.showSuccess('Categoria excluída com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao excluir a categoria');
    }
  }

}
