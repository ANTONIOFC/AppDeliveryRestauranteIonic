import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/core/services/alert.service';
import { ToastService } from './../../core/services/toast.service';

@Component({
  selector: 'app-cardapio-list',
  templateUrl: './cardapio-list.page.html',
  styleUrls: ['./cardapio-list.page.scss'],
})
export class CardapioListPage implements OnInit {

  products: any[] = [];

  constructor(
    private alert: AlertService,
    private toast: ToastService
  ) { }

  ngOnInit() {

    for(let i=0;i<20; i++){
      const product = {
        id: i+1,
        category: 'Hamburguers',
        name: `Hamburguer ${i+1}`,
        price: (10.5 * (i+1)),
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
        photoUrl: 'assets/icon/air-conditioner.svg'
      }
      this.products.push(product);
    }
  }

  remove(produto: any) {
    this.alert.showConfirmDelete(produto.name, () => this.executeRemove(produto) );
  }

  private executeRemove(produto: any) {
    try {
      // chamar a API para remover

      // remove da lista
      const index = this.products.indexOf(produto);
      this.products.splice(index, 1);

      this.toast.showSuccess('Produto excluído com sucesso');
    } catch (error) {
      this.toast.showError('Erro ao excluir o produto');
    }
  }
}
