import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SampleService } from './sample.service';
import { Subscriber } from 'rxjs';

@Component({
    selector: 'hellosecond',
    template: `<h1>{{twoWay}}</h1><h1>{{SubjectValue}}</h1>
            <h2>{{myInfo}}</h2>`
})

export class HelloSecondComponent implements OnInit {
    private _name:string;
    private twoWay:string;
    private SubjectValue:string;
    myInfo:any;
    private newValue:string;
    @Output() selectionChange:  EventEmitter<any> = new EventEmitter<any>();
    constructor(private sampleService:SampleService) { 
        this.sampleService.mySubject.subscribe((data)=>{
            this.SubjectValue='Subject ' + data;
        })
       this.myInfo=this.sampleService.myInfo;
       this.sampleService._myInfo$.subscribe((data)=>{
        this.myInfo='Variable Set ' + data;
       })
    }

    ngOnInit() {


       
     }
    
@Input() get selection(){
    return this._name;
   
   }
   set selection(name){
   this._name=name;
    this.twoWay=name;
   }



   
   
}
