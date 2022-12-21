import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';
import { IProduto, IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }
// EM localstorage pegue o item....
  obterCarrinho(){
    this.itens= JSON.parse(localStorage.getItem("carrinho") || "[]");  //JSON.parse  fazendo conversão de string para objeto
    return this.itens; 

    // ou simplificando:
    //  return JSON.parse(localStorage.getItem("carrinho") || "")

   }// o || caso se não encontrar "carrinho" retorna string vazia

   adicionarAoCarrinho(produto:IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem('carrinho',JSON.stringify(this.itens) );//convertendo de objeto para string
   }

   limparCarrinho(){
    this.itens =[];
    localStorage.clear();
   }

   removerProdutoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    //é preciso sobrescrever o localstorage
    localStorage.setItem('carrinho',JSON.stringify(this.itens) );
   }

}

