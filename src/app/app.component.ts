import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-completo';

  valor: number = 5;

  deletarCiclo: boolean = false;

  mudarValor(){
    this.valor++;
  }

  destruirClico(){
    this.deletarCiclo = true;
  }

}
