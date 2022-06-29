import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';

const routes: Routes = [
  { path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule) }, //rota lazyloading destinada a produtos
  { path: "", redirectTo: "produtos", pathMatch: "full" },
  { path: "carrinho", loadChildren: () => import('./carrinho/carrinho.module').then(m => m.CarrinhoModule) },
  { path: 'contato', loadChildren: () => import('./contato/contato.module').then(m => m.ContatoModule) }, //deixei o caminho vazio, pra quando estiver na home e assim que abrir, ja ser direcionado pra pagina produtos automaticamente
  { path: "**", component: NaoEncontradoComponent } //ao entrar numa pagina que não existe vai aparecer uma pagina não encontrada

];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
