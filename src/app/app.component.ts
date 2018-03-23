import { Component,Input } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';
private _myname;

@Input() get getSelect() {
console.log('Parent..get');
return this._myname;
}
set getSelect(name){
  console.log('Parent..set');
  this._myname=name;
}

Hello(){
  this.getSelect='Child Set';
}


}
