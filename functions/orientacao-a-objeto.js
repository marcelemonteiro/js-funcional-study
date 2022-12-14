/*
    Orientação a Objetos (OO) em JavaScript! 
*/

// Função Construtora (cria objetos)
function Produto(nome, preco, desc = 0.15) {
    this.nome = nome;
    this.preco = preco;
    this.desc = desc;
    this.precoFinal = function () {
        return this.preco * (1 - this.desc);
    }

}

const p1 = new Produto('caneta', 1.99);
console.log(p1.nome, p1.precoFinal());

/*
    Usando o class (syntax sugar, no fim das contas uma classe é uma função)
*/

class Produto2 {
    constructor(nome, preco, desc) {
        this._nome = nome;
        this.preco = preco;
        this.desc = desc;
    }

    get nome() {
        return `Produto: ${this._nome}`;
    }

    // o set permite alterar/definir o valor de algum atributo
    set nome(novoNome) {
        this._nome = novoNome.toUpperCase();
    }

    // utilizando o get eu posso chamar a função (precoFinal()) como se fosse um atributo (precoFinal)
    get precoFinal() {
        return this.preco * (1 - this.desc);
    }
}

const p2 = new Produto2('caderno', 15.50, 0.5);
p2.nome = 'caderno2';
console.log(p2.nome, p2.precoFinal);