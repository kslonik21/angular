import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[border]'
})
export class BorderDirective implements OnInit {
  @Input() border: number;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.setBorder(this.border);
  }
  private setBorder(creationDate: number): void {
    const currentDate  = new Date().getTime();
    const numDay = 14;
    const numDayToCompare = numDay * 24 * 60 * 60 * 1000;
    let borderColor=null;

    if (creationDate < currentDate && creationDate >= (currentDate - numDayToCompare)) {
      borderColor = '#2B7D1B';
    } else if (creationDate > currentDate) {
      borderColor = '#0092D2';
    }
    this.el.nativeElement.style.border = `2px solid  ${borderColor}`;
  }
}
