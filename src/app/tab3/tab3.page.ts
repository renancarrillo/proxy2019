import { Component } from '@angular/core';
import { AlumnosService } from 'src/app/api/alumnos.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alumnos: AlumnosService,
              public alertController: AlertController) {}

  llamar_alumnos() {
    console.log('ENTRO EN LA FUNCION QUE LLAMA ALUMNOS');
    this.alumnos.students().subscribe(
      (res: any) => {
        console.log('DENTRO DEL COCHINERO');
        console.log(res);
      },
      err => {
      }
    );
  }

  // go() {
  //   console.log("ENTRO EN LA FUNCION");
  //   this.students.students().subscribe(
  //     (res: any) => {
  //       console.log("DENTRO DEL COCHINERO");
  //       console.log(res);
  //     },
  //     err => {
  //     }
  //   );
  // }
}
