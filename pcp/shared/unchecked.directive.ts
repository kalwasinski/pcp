import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnchecked]'
})
export class UncheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const item = this.el.nativeElement;
    this.renderer.setAttribute(item, 'src', './../assets/unchecked.png');
  }
}
