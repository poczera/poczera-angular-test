import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit{
  carros: any = [];
  pessoa: any = {};
  pessoas: any[] = [];
  cores: any[] = [];

  ngOnInit() {
    this.carros = this.getCarrosFromBackend();
  }

  save(){
    if(this.pessoa.id){
      this.pessoa = {};
    } else {
      this.pessoa.id = this.pessoas.length + 1;
      this.pessoas.push(this.pessoa);
      this.pessoa = {};
    }  
  }

  toEdit(pessoaToEdit){
    this.pessoa = pessoaToEdit;
  }

  populaCor(){
    this.cores = this.getCoresFromBackend();
  }

  getCarrosFromBackend(){
    return [{id:1, name:"maveko"},{id:2, name:"fusca"},{id:3, name:"opala"}]
  }

  getCoresFromBackend(){
    return [{id:1, name:"preto"},{id:2, name:"prata"},{id:3, name:"azul"}]
  }
}
