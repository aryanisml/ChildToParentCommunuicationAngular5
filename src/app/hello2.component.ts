import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'hellosecond',
    template: `<h1>{{twoWay}}</h1>`
})

export class HelloSecondComponent implements OnInit {
    private _name:string;
    private twoWay:string;
    @Output() selectionChange:  EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit() { }
    
@Input() get selection(){
    return this._name;
   
   }
   set selection(name){
   this._name=name;
    this.twoWay=name;
   }
   
   
}