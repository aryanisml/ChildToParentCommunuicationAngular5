import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
private _myname;
private _secondName;

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
}

@Input() get getSelect2() {
  return this._secondName;
  }
  set getSelect2(name){
    this._secondName=name;
  }
  


}
