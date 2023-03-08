import { Component } from '@angular/core';
import { CalculadoraService } from './services/calcu.service';
import { Calculo } from './models/calculo';
import { HistoryCalc } from './models/historyCalc';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CalculadoraService]
})
export class AppComponent {
  title = 'calculadora';
  public calculo:Calculo;
  public operacion:String;
  public resultado:any;
  public historial:HistoryCalc[];
  constructor(
    private _calcuService:CalculadoraService
  ){
    this.calculo=new Calculo(0,0);
    this.operacion='+';
    this.resultado=null;
    this.historial=[];
    //this.post();
    //this.get();
    this.getHistory();
  }
  suma(){
    this._calcuService.post(this.calculo).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  resta(){
    var cadena=this.calculo.num1.toString()+","+this.calculo.num2.toString();
    this._calcuService.get(cadena).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  producto(){
    this._calcuService.put(this.calculo).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  division(){
    var cadena=this.calculo.num1.toString()+","+this.calculo.num2.toString();
    this._calcuService.delete(cadena).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  potencia(){
    this._calcuService.potencia(this.calculo).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  raiz(){
    this._calcuService.patch(this.calculo).subscribe(
      response=>{
        //console.log(response);
      }
      ,error=>{
        if(<any>error.status==402){
          this.resultado=<any>error.error.result;
        }
      }
    );
    this.getHistory();
  }
  getHistory(){
    this._calcuService.getHistory().subscribe(
      response=>{
        this.historial=response.result;
        this.historial=this.historial.reverse();
      }
      ,error=>{
        console.log(<any>error)
      }
    );
  }
}
