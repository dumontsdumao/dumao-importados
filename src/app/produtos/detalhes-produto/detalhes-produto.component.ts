import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { CarrinhoService } from 'src/app/carrinho.service';
@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  quantidade = 1;
  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute, //utilizei o serviço de rota
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService//dizer que vou utilizar o serviço de carrinho
  ) { }

  ngOnInit(): void { //quando eu inicializar
    const routeParams = this.route.snapshot.paramMap;//quer dizer que vou pegar os parametros da rota atraves de route > esse comando vai me trazer todos os parametros ali da minha rota 
    const produtoId = Number(routeParams.get("id"));  // estamos pegando id pq e justamente o parametro que estamos pegando na rota para definilas e separalas
    this.produto = this.produtosService.getOne(produtoId)//minha propriedade produto vai receber produtos.service.getone obtenha um produto, e ele pede pra passar o id do produto, que é justamente o que a gente obteve atraves da rota, ele pede que a gente passe um numero, mas a gente ta passando uma string ou null, pq quando a gente obtem um parametro da nossa rota sempre vai vir como uma string se ele existir ne, ou nulo se n for passado nenhum parametro, o que a gente pode fazer pra ter certeza que vai passar um numero, é converter o parametro, usando o Number(routeParams.get("id"))
  }
  adicionarAoCarrinho() {
    this.notificacaoService.notificar("O produto foi adicionado ao carrinho"); //função de notificação, parametro na vdd -> agora irei atrelar esse metodo ao clique do botão
    const produto: IProdutoCarrinho = {//criar o produto aqui antes,
      ...this.produto!,//dizer que ele vai ser ali tudo que ja tem dentro do meu produto
      quantidade: this.quantidade// e tambem posso dizer que vai ter a quantidade
    }
    this.carrinhoService.adicionarAoCarrinho(produto); // a gente acabou de passar o produto que a gente criou ali em cima, a gente acabou de adicionar o produto
  }
}
