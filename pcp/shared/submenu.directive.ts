import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
  selector: '[appSubmenu]'
})
export class SubmenuDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    const item = this.el.nativeElement;
    this.renderer.setAttribute(item, 'src', './../assets/arrowMore.png');
    // this.renderer.setStyle(item, 'background', this.setRed());
  }

  // private setRed(): any {
    // return 'red';
 // }
}
