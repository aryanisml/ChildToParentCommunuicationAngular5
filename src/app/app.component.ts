import { Component,Input } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { SampleService } from './sample.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  name = 'Angular 5';
private _myname;
private _secondName;
private SubjectValue;
constructor(private sampleService:SampleService){

}
ngOnInit(){ 
  this.sampleService.mySubject.subscribe((data)=>{
    this.SubjectValue='Subject ' + data;
})
}

@Input() get getSelect() {
console.log('Parent..get');
return this._myname;
}
set getSelect(name){
  console.log('Parent..set  from child', name);
  this._myname=name;
  this.getSelect2=name;
}

Hello(){
  this.getSelect='Child Set';
  this.sampleService.setData(this.getSelect);
}

@Input() get getSelect2() {
  return this._secondName;
  }
  set getSelect2(name){
    this._secondName=name;
  }
  


}
