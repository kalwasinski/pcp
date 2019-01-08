import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const item = this.el.nativeElement;
    this.renderer.setAttribute(item, 'src', './../assets/checked.png');
  }
}

