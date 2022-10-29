import { Directive, ElementRef , HostListener, Input} from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {

  private initialColor: string='#f5f5f5';
  private defaultColor: string='#009688';
  private defaultHeight: number=180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    //console.log("this.setHeight(180);");
    this.setBorder(this.initialColor);
    //console.log("this.setBorder('#f5f5f5');");
  }

  @Input('pkmnBorderCard') borderColor: string;
  //@Input() pkmnBorderCard: string;

  @HostListener('mouseenter')  mouseenter(){
    //this.setBorder('#009688');
    //console.log("mouseenter [" + this.borderColor + "]");
    this.setBorder(this.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave')  mouseleave(){
    this.setBorder(this.initialColor);
    //console.log("mouseleave");
  }

  private setHeight(height: number){
    this.el.nativeElement.style.height=`${height}px`;
  }
  
  private setBorder(color: string){
    let border =`solid 4px ${color}`;
    this.el.nativeElement.style.border=border;
    //console.log("border="+border);
  }

}
