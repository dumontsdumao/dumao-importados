import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = []; //vetor puxado la dos  produtos
  constructor() { }
  obtemCarrinho() { // metodo pra trazer pra gente os objetos colocados no carrinho
    //const carrinho = JSON.parse(localStorage.getItem("carrinho") || ""); // vou pegar as informações do carrinho, de dentro do localStorage.getItem. dizer que a chave que vou atribuir ao carrinho vai ser a chave carrinho -> //o JSON parse aceita so uma String, mas posso ter um undefined se n tiver o carrinho, pra eu contornar essa situação vou dizer pra retornar uma string vazia caso não consiga achar o que tem ali no carrinho
    //return carrinho; //ja posso retornar o carrinho que vai ser basicamente um item do tipo IProdutoCarrinho
    //da ate pra simplificar isso colocando em uma linha so, ficando da seguinte forma ------------------>  return JSON.parse(localStorage.getItem("carrinho") || "");
    //Forma antiga acima, forma reformulada pelo proprio prof abaixo, um pouco mais correta
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
    //quando a gente precisar remover os itens do carrinho, a gente consegue trabalhar diretamente com essa propriedade
  }
  adicionarAoCarrinho(produto: IProdutoCarrinho) {//vai receber um produto do IProdutoCarrinho, e vou ter que salvar a informação
    this.itens.push(produto);//eu vou dar um push nos itens que eu ja tenho dentro desse carrinho -> vou acrescentar aquele novo item no carrinho
    //depois eu posso salvar essa lista de produtos no localStorage
    // a gente tem que passar o que  agente vai colocar dentro do local storage, nesse caso os produtos
    //a gente tem o stringify pra converter um objeto pra uma string
  }
  limparCarrinho() {
    this.itens = []; //dizer que vai receber o valor vazio, o que vai limpar o carrinho
    localStorage.clear//limpar o localStorage
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);//vai percorrer todo o vetor de itens
    //vai manter todos os produtos que tenha Id diferente, so vai remover o produto com aquele id especifico
    localStorage.setItem("carrinho", JSON.stringify(this.itens)); // a bastar sobreescrever pra apagar
  }
}
