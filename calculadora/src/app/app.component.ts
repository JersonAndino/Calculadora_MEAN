import { Component } from '@angular/core';
import { CalculadoraService } from './services/calcu.service';
import { Calculo } from './models/calculo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CalculadoraService]
})
export class AppComponent {
  title = 'calculadora';
  public calculo:Calculo;
  constructor(
    private _calcuService:CalculadoraService
  ){
    this.calculo=new Calculo(0,0);
    //this.post();
    //this.get();
  }
  post(){
    this._calcuService.post(this.calculo).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
  get(){
    var cadena=this.calculo.num1.toString()+","+this.calculo.num2.toString();
    this._calcuService.get(cadena).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
  put(){
    this._calcuService.put(this.calculo).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
  delete(){
    var cadena=this.calculo.num1.toString()+","+this.calculo.num2.toString();
    this._calcuService.delete(cadena).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
  potencia(){
    this._calcuService.put(this.calculo).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
  patch(){
    this._calcuService.patch(this.calculo).subscribe(
      response=>{
        console.log(response);
      }
      ,error=>{
        console.log(<any>error);
      }
    );
  }
}
