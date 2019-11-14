import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numero: any = 0;
  constructor(public alertController: AlertController) {}


  presionar() {
    console.log('LO PRESIONASTE');
    if (this.numero >= 10) {
      this.presentAlert('Aviso', 'Ya estas en el 10');
    } else {
      this.numero += 1;
    }
  }

  presionar2() {
    console.log('LO PRESIONASTE');
    if (this.numero <= 0) {
      this.presentAlert('Aviso', 'Ya estas en el 0');
    } else {
      this.numero -= 1;
    }
  }

  async  presentAlert(title, msg ) {
    const alertController = await this.alertController.create({
      header: title,
      message: msg,
      buttons: ['Entendido']
    });
    await alertController.present();
  }
}
