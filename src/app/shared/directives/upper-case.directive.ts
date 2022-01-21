import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpperCase]'
})
export class UpperCaseDirective {

  constructor(
    private elRef: ElementRef,
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    const upperCase: boolean = true;
    this.onUpperCase(upperCase);
  }
  

  @HostListener('mouseleave') onMouseLeave() {
    const upperCase: boolean = false;
    this.onUpperCase(upperCase);
  }

  private onUpperCase(upperCase: boolean) {
    if(upperCase) {
      this.elRef.nativeElement.innerText = this.elRef.nativeElement.innerText.toUpperCase();
    } else {
      this.elRef.nativeElement.innerText = this.elRef.nativeElement.innerText.toLowerCase();
    }
  }


}
