import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SampleService {
   mySubject:Subject<any>=new Subject<any>();

   myInfo:any;
   private _myInfo:Subject<any>=new Subject<any>();
   _myInfo$:Observable<any>;

    constructor() { 

        this._myInfo$=this._myInfo.asObservable();
        this._myInfo$.subscribe((data)=>{
            this.myInfo=data;
        })
    }

    setData(data:any){
        this.mySubject.next(data);
        this._myInfo.next(data);
    }

}
