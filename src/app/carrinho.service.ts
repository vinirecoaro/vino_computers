import { Injectable } from '@angular/core';
import { IprodutoCarrinho } from './produtos/produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IprodutoCarrinho[] = []
  constructor() { }

  obtemCarrinho(){
    return JSON.parse(localStorage.getItem("carrinho") || "");

  }

  adicionarAoCarrinho(produto : IprodutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens))
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear()
  }
}
