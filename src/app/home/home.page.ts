import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  num: number=0;
  
  numSecret: number = this.numAleatorio(0,36); 
  mayorMenor: string='Esperando apuesta';
  saldo: number=200;
  mostrarRuleta: boolean=false;
  constructor() {
    console.log(this.numSecret);
    
  }

  numAleatorio(a: number, b: number){
  return Math.round(Math.random()*(b-a));
  }
  
  compruebaNumero(){
    this.mostrarRuleta=true;
    setTimeout(() =>{
      
      this.mostrarRuleta=false;

    if(this.saldo>=100){
    if(this.num >=0 && this.num <=36){
      if(this.numSecret <= 18){
        if(this.num <=18 && this.num >=0){
          this.mayorMenor = 'Numero de zona baja has ganado  el numero era '+this.numSecret;
          this.saldo+=200;
          if(this.numSecret==this.num){
            this.saldo+=100;
          }
          this.numSecret=this.numAleatorio(0,36);
        }else{
          this.mayorMenor = 'Numero de zona alta has perdido el numero era '+this.numSecret;
          this.saldo-=100;
          this.numSecret=this.numAleatorio(0,36);
        }
      }else if(this.numSecret > 18){
        if(this.num >18 && this.num <=36){
          this.mayorMenor = 'Numero de zona alta has ganado el numero era '+this.numSecret;
          this.saldo+=200;
          if(this.numSecret==this.num){
            this.saldo+=100;
          }
          this.numSecret=this.numAleatorio(0,36);
        }else{
          this.mayorMenor = 'Numero de zona baja has perdido el numero era '+this.numSecret;
          this.saldo-=100;
          this.numSecret=this.numAleatorio(0,36);
        }
      }
    }else{
      this.mayorMenor = 'Introduce un numero entre el 0 y 36 porfavor';
    }
  }else{
    this.mayorMenor = 'NO TIENES SALDO SUFICIENTE PORFAVOR VUELVA OTRO DIA';
  }
},2000)
  }
}
