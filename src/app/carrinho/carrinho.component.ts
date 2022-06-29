import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';


@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  itensCarrinho: IProdutoCarrinho[] = [];
  total = 0;
  constructor(
    public carrinhoService: CarrinhoService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }
  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0); //reduce percorre todos e tras o elemento anterior e o atual
    //percorrendo todos os itens do carrinho, multiplicando preço x quantidade, ate o carrinho acabar
  }
  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    //depois que remover atualizar
    this.calcularTotal;
  }
  comprar() {
    alert("Obrigado por comprar em nossa loja :)");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"]);
  }
}
