import { Directive, ElementRef, Input, Renderer2, OnInit } from '@angular/core';

@Directive({ selector: '[appShadow]' })
export class ShadowDirective implements OnInit {
@Input() 
appShadow:string ="";


constructor(private elem: ElementRef, private renderer: Renderer2) { }

shadow:string = "text-shadow: 2px 2px 4px #000000;";
ngOnInit() {
  if(this.appShadow == "")
     {
        this.appShadow = "red";
     }  
     this.elem.nativeElement.style = this.shadow;
     this.elem.nativeElement.style.color = this.appShadow;
}
}