import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos; //tem acesso direto aos produtos que vem la daquele nosso arquivo 
  constructor() { }

  getAll() {
    return this.produtos;
  }

  getOne(produtoId: number) {
    return this.produtos.find(produto => produto.id = produtoId); // para encontrar um "produto" atraves de uma condição que eu especificar -> especificar que vai encontrar um produto, o qual o produto.id seja igual ao produtoId que a gnt recebe ali da função > produto vai receber o produto.id que for igual ao produtoId
  }
}
