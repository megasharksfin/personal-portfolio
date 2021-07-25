import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-portfolio';

  constructor(
    private renderer: Renderer2,
  ) {
    this.renderer.listen('window', 'scroll', (event) => {
    });
  }
}
