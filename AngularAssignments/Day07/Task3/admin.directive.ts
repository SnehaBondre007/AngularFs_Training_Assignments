import { Directive, Input, OnChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAdmin]'
})
export class AdminDirective{

  @Input()
  appAdmin:boolean = true;
  constructor(private viewObj:ViewContainerRef, private templateRef: TemplateRef<any>) {}

  ngOnChanges() {
    if(this.appAdmin==true){
      this.viewObj.createEmbeddedView(this.templateRef);
    }
    else{
      this.viewObj.clear();
    }
  }

}
