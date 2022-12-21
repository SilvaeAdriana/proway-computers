import { Component, OnInit } from '@angular/core';
import { IProduto, produtos } from '../produtos';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
//import { IProduto, produtos } from '../produtos';  importando produtos
//mas injetando não precisa
@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit{

  //em vez de importar produtos la em cima, podemos
  //usar o serviço injetando
  produtos: IProduto[] | undefined;


  constructor(private produtosService: ProdutosService,
    //AULA 6 PARTE 15
    private route: ActivatedRoute
    )
  
  {
    
  }

  ngOnInit(): void{
    //aula 16 parte 15
    //this.produtos = this.produtosService.getAll();
    //modo diferente de iniciar a página

    const produtos = this.produtosService.getAll();

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      
      if (descricao){
        //permite filtragem segundo descricao do produto na área de busca
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
        return;


      }
      this.produtos = produtos;
    })
    
  }

}

