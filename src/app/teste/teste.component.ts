import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.scss'
})
export class TesteComponent {
  @Input() objTest = {};
  click = 0
  t(){
    let clickAnt = this.click;
    let retorno = this.click < 3 ? this.click ++ : null;
    if (retorno === null) return;
    else if (this.click >= 2){
      this.objTest = this.gerarDadosAleatorios()
    }
    else {
      this.objTest = {id: '5', name: 'José'}
    }
  }

  private gerarDadosAleatorios(): any{
    return {
      id: (Math.random() * (5 - 0) + 0).toString(),
      name: "José"
    }
  }
}
