import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  numero: any = 0;
  constructor() {}


  presionar(){
    console.log("LO PRESIONASTE");
    if(this.numero >= 10){
      console.log("YA ESTA EN CERO");
    }else{
      this.numero += 1;
    }
  }

  presionar2(){
    console.log("LO PRESIONASTE");
    if(this.numero <= 0){
      console.log("YA ESTA EN CERO");
    }else{
      this.numero -= 1;
    }
  }
}
