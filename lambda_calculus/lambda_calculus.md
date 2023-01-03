# Lambda Calculus

## Referências
- Lambda Calculus - Fundamentals of Lambda Calculus & Functional Programming in JavaScript 
	(https://www.youtube.com/watch?v=3VQ382QG-y4)
- A Flock of Functions: Combinators, Lambda Calculus, & Church Encodings in JS - Part II 
	(https://www.youtube.com/watch?v=pAnLQ9jwN-E)

## Definição
- Resolver problemas por meio de definição e aplicação de funções;
- É equivalente a máquina de Turing (também é um modelo universal de computação que pode ser usado
	para simular qualquer máquina de Turing);
- Menor linguagem de programação universal do mundo;

Resumindo:
- Lambda Calculus é um sistema matemático formal que expressa computações com base na abstração e 
aplicação de funções. É um modelo universal de computação que pode ser usado para simular qualquer 
máquina de Turing. Foi introduzido pelo matemático Alonzo Church na década de 1930 como parte de 
sua pesquisa sobre os fundamentos da matemática. 

- Máquina de Turing (procedural)
- Lambda Calculus (funcional)

### Conceitos importantes:
1) Abstração de função (generalização de instâncias concretas do problema)
	Ex: Problema concreto -> Somar dois números
		Instâncias -> 2 + 3; Outra instância -> 7 + 1, e por aí vai...
		Generalização -> a + b -> Criar função somar dois números
		
2) Aplicação da função (representa o ato de chamar a função)

### Características:
- Variáveis são imutáveis (não existe o conceito de atribuição);
- Função SEMPRE com UM parâmetro (múltiplos parâmetros são passados parcialmente usando currying);
- Tudo é função, tudo é definidor a partir de uma função.

## Sintaxe
- λa.x (definição de uma função, "Abstração Lambda")
	λ -> função
	a -> parâmetro
	x -> corpo (retorno)

- <exp> ::= <var>
		  | <exp> <exp> *Aplicação*
		  | λ<var>.<exp> *Abstração*
		  | (<exp>) *Agrupamento*

Abstração: Lambda x JavaScript
- λa.b | a => b
- λa.b x *Conceito de aplicação, x será aplicado à b* | a => b(x)
- λa.(b x) | a => (b(x) *Não faz diferença nenhuma*
- (λa.b) x | (a => b)(x) *Faz diferença, aqui x será aplicado à a*
- λa.λb.a | a => b => a 

Aplicação: Lambda x JavaScript
- f a *Espaço, sem parênteses* | f(a)
- f a b | f(a)(b) 
- (f a) b | (f(a))(b) *Não faz diferença*
- f (a b) | f(a(b)) 

### β Reduction
- É basicamente ir executando uma expressão lambda até ela ficar na sua menor forma possível.
Ex: ((λa.a) λb.λc.b) (x) λe.f  *Espaço é uma aplicação de alguma coisa dentro da função*
	* Vou passar a função λb.λc.b como parâmetro (higher-order function) para λa.a e retornar o *
	* valor de a -- que é o valor do que eu passei como parâmetro: *
	-> λb.λc.b (x) λe.f 
	* Depois disso podemos aplicar o valor x na função λb.λc.b *
	* Aonde tem b eu vou colocar x *
	-> (λc.x) λe.f 
	* Como em (λc.x) não retorna nenhum valor de parâmetro (retornaria se fosse (λc.c)), *
	* o resultado final fica: *
	-> x (β-Normal Form)

### Simplificação
- λaλb.a b => λab.a b *Mas funciona da mesma forma, é só a sintaxe* 
- Em JS: a => b => a(b) 

### Bound Variables
- Está ligada aos parâmetros passados, ex: λab.a b 

### Free Variables
- Não está liga aos parâmetros da função aplicada, ex: λc.x 
	
	
	


