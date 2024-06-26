import { Directive, ElementRef, Input, OnInit, Renderer2, input } from '@angular/core';

export interface ColorBox {
  color: string;
  size: number;
}

@Directive({
  standalone: true,
  selector: '[appColorBox]'
})
export class ColorBoxDirective implements OnInit {
  public color = input<ColorBox['color']>();
  public size = input<ColorBox['size']>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'block');
    this.renderer.setStyle(this.elementRef.nativeElement, 'height', `${this.size()}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'width', `${this.size()}px`);
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', this.color());
    this.renderer.addClass(this.elementRef.nativeElement, 'rounded-lg');
  }
}
