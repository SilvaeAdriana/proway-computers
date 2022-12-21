import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent  implements OnInit{
  itensCarrinho: IProdutoCarrinho[] = [];
  total =0;

  constructor(public carrinhoService: CarrinhoService,
    private router: Router){
   

  }


  ngOnInit(): void{//chamada dos metodos
    this.itensCarrinho = this.carrinhoService.obterCarrinho();
    this.calculaTotal();

  }

  removerProdutoCarrinho(produtosId: number){
    this.itensCarrinho = this.itensCarrinho.filter(item  => item.id !== produtosId);
    this.carrinhoService.removerProdutoCarrinho(produtosId);
    this.calculaTotal(); //depois de remover vai recalcular o total

    }

    calculaTotal(){
      this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade) ,0); //reduce percorre os elementos, traz o anterior e o atual
    }

    comprar(){
      alert("Parabéns vc finalizou sua compra");
      this.carrinhoService.limparCarrinho();//limpando carr
     // trazendo o cliente novamente para pag de produto  --> é preciso injetar o router no constructor
      this.router.navigate(["produtos"]);
    }
  }


