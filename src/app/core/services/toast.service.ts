import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast: ToastController) { }

  /* showSuccess(message:string) {
    return this.toast.create({
      message,
      duration: 3000,
      color: 'success',
      position: 'bottom'
    }).then(toastResult => {
      toastResult.present();
    });
  } */

  async showSuccess(message:string) {
    const toastResult = await this.toast.create({
      message,
      duration: 3000,
      color: 'success',
      position: 'bottom'
    });

    toastResult.present();
  }

  async showError(message:string) {
    const toastResult = await this.toast.create({
      message,
      duration: 3000,
      color: 'danger',
      position: 'bottom'
    });

    toastResult.present();
  }
}
