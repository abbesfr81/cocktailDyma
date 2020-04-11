import {Directive, HostBinding, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges{

  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @Input('appActive') isActive: boolean;

 /*  @Input('appActive') set isActive(condition) {
    if (condition) {
      this.backgroundColor = 'var(--primary)';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }  */

  constructor() { }

  ngOnChanges(): void {
    if (this.isActive) {
      this.backgroundColor = 'var(--primary)';
      this.color = 'white';
    } else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }

}
