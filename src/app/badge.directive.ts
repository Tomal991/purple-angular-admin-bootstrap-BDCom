import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[badge]'
})
export class BadgeDirective {

  @Input('badge') color:string=''

  constructor(private el:ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.classList.add('badge',`badge-color-${this.color}`)
  }

}


