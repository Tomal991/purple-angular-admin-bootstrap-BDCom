import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[dots]'
})
export class CircleDirective {

  @Input('dots') color:string=''

  constructor(private el:ElementRef) { }

  ngOnInit(){
    this.el.nativeElement.classList.add('dots',`dots-color-${this.color}`)
  }

}
