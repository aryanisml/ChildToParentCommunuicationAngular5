import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Hello {{selection}}!</h1><button (click)="show()">ShowChild1</button> `,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
   private _name;

 @Output() selectionChange:  EventEmitter<any> = new EventEmitter<any>();
//  @Output() selectionChange: EventEmitter<string[]> = new EventEmitter<string[]>(); 


@Input() get selection(){
 return this._name;

}

set selection(name){
console.log('child....set', name);
this._name=name;
this.selectionChange.emit(this._name);
}


show(){
  //console.log('Swapnil');
  this.selection='Swapnil';
}

}
