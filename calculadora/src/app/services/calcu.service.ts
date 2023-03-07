import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calculo } from '../models/calculo';

import { Subject } from 'rxjs';

@Injectable()
export class CalculadoraService{
    public url:string;
    constructor(
        private _http:HttpClient,
        //private toastr: ToastrService
    ){
        this.url='http://127.0.0.1:3600/';
    }

// hacer transaccion
//http://localhost:3600/do-transaccion
post(calculo:Calculo):Observable<any>{
    let params=JSON.stringify(calculo);
    //console.log(params);
    let headers=new HttpHeaders().set('Content-Type','application/json');
    //headers.set('params',campos);
    return this._http.post(this.url,params,{headers:headers});
}
get(campo:string):Observable<any>{
    //let params=JSON.stringify(calculo);
    //console.log(params);
    let headers=new HttpHeaders().set('Content-Type','application/json');
    //headers.set('params',campos);
    return this._http.get(this.url+campo,{headers:headers});
}
}