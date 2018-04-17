import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SampleService {
   mySubject:Subject<any>=new Subject<any>();

    constructor() { }

    setData(data:any){
        this.mySubject.next(data);
    }

}