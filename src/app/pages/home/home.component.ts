import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

/*TODO
  dado angular 17
  que esto va a terner su propio modulo
  la arquitectura que planee
  ¿quiero que esto sea standalone?
*/
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  onLinkClick() {
    window.open(
      'https://www.linkedin.com/in/gabrielasuarezcarvajal/',
      '_blank'
    );
  }
}
