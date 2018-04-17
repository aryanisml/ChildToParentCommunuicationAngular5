import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleService } from './sample.service';
import { Subscriber } from 'rxjs';

@Component({
    selector: 'hellosecond',
    template: `<h1>{{twoWay}}</h1><h1>{{SubjectValue}}</h1>`
})

export class HelloSecondComponent implements OnInit {
    private _name:string;
    private twoWay:string;
    private SubjectValue:string;
    @Output() selectionChange:  EventEmitter<any> = new EventEmitter<any>();
    constructor(private sampleService:SampleService) { }

    ngOnInit() {


        this.sampleService.mySubject.subscribe((data)=>{
            this.SubjectValue='Subject ' + data;
        })
     }
    
@Input() get selection(){
    return this._name;
   
   }
   set selection(name){
   this._name=name;
    this.twoWay=name;
   }



   
   
}