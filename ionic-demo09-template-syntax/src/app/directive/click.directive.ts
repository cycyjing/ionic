import { Directive, Output, EventEmitter,ElementRef } from '@angular/core';

@Directive({
  selector: '[appClick]'
})
export class ClickDirective {
  @Output('appClick') clicks = new EventEmitter<string>();
  toggle = false;

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', (event: Event) => {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? 'Click!' : '');
    });
  }

}
