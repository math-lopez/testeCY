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
  t(){
    this.objTest = {
      id: "5",
      name: "José"
    }
  }
}
