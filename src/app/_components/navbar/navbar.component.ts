import { Component, EventEmitter, OnInit, Output, Renderer2 } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() scrollToSection = new EventEmitter<string>();
  scrollY = new BehaviorSubject<number>(0);
  constructor(
    private renderer: Renderer2,
  ) { }

  ngOnInit(): void {
    this.renderer.listen('window', 'scroll', (event) => {
      this.scrollY.next(event.target.scrollingElement.scrollTop);
    });
  }

  scrollTo(section: string): void {
    this.scrollToSection.emit(section);
  }

}
