import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') highlightColor: string
  constructor(public elementRef: ElementRef) {
    this.highlightColor = '';
  }

  @HostListener('mouseover') method1() {
    // this.changeColor('black', 'lightgreen')
    this.changeColor('black', this.highlightColor || 'lightgreen')
  }
  @HostListener('mouseleave') method2() {
    this.changeColor('black', 'white')
  }

  public changeColor(color: string, bgColor: string) {
    this.elementRef.nativeElement.style.color = color
    this.elementRef.nativeElement.style.backgroundColor = bgColor
  }


}
