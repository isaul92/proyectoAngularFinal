import {Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../models/project'
import {global } from './global';

@Injectable()
export class ProjectService{
public url:string;
constructor(
    private _http:HttpClient
    ){
this.url=global.url;
}
testService(){
    return "probando el servicio de angular";
}


///metodo para guardar 
savedProject(project:Project):Observable<any>{
let params=JSON.stringify(project);
let headers=new HttpHeaders().set('Content-Type','application/json');
return this._http.post(this.url+'save',params,{headers:headers});
}

//metodo para enlistar EN PETICION AJAX A MI SERVIDOR NODEJS
getProyects():Observable<any>{
let headers=new HttpHeaders().set('Content-Type','application/json');
return this._http.get(this.url+"buscarTodos",{headers:headers});

}







}