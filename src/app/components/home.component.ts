import { Component} from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: '../views/home.html'}
)
  export class HomeComponent{
      public titulo:string;

      constructor (){
          this.titulo='Webapp de productos con Angular Perros';
      }
      ngOnInit(){
          console.log ('Se ha cargado el componente');
      }
  }