/*
//Estudos básicos sobre JavaScript-------------------------------------------------------------------------------------------------

//Variáveis, números e metodos de retorno----------------------------------------------------------------------------------------------

//variáveis não tipadas são caracterísitcas do JS entretanto requerem muita atenção ao realizar operações posterioresà sua declaração

var nome = "Matheus Alexandre";
var n1 = 5;
var n2 = 5;
var frase = "Rayssa Leal a skatista mais braba do Brasil"

//alert é um metodo que retorna um pop-up no browser e console.log gera um retorno das variáveis no próprio console replace substitui um valor por outro passados por parametro
//alert(nome + " tem "+ idade +" anos");
//alert (idade + idade2);
console.log(nome);
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(frase.replace("Brasil","Mundo"));
console.log(frase.toUpperCase());
console.log(frase.toLowerCase());
//alert(frase.replace("Brasil","Mundo"));

//Array e Dicionário----------------------------------------------------------------------------------------------

var lista = ["maçã","pêra","laranja"];
lista.push("uva");
//lista.pop();

console.log(lista);
console.log(lista[1]);
console.log(lista[0], lista[2]);
console.log(lista.length);
console.log(lista.reverse());
console.log(lista.toString());
console.log(lista.toString()[1]);
console.log(lista.join("|"));

//dicionários se parecem com estruturas json e é possível criar um array de dicionários
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta);
console.log(fruta.nome);
//alert(fruta.cor);

var frutas = [{nome:"maçã", cor:"vermelha"},{nome:"uva", cor:"roxa"}]
console.log(frutas[1].nome);
console.log(frutas[0].cor);

//Condicionais, laços de repetição e Date----------------------------------------------------------------------------------------------

//condicinais
var idade = prompt("Qual sua idade?");

if (idade >= 18){
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};


//repetição
var i = 0;

while (i <= 5){
    //alert(i);
    console.log(i);
    i++;
};

var j;

for (j=0; j<=5; j++){
    console.log(j);
};

//date

var d = new Date();
alert(d);
alert(d.getMonth());
alert(d.getMinutes());
alert(d.getDay());
*/

//Desenvolva páginas web com JavaScript----------------------------------------------------------------------------------------------


function soma(n1,n2){
    return n1 + n2;
}

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome);
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

//alert(soma(5,10));
//alert(setReplace("Vai Letícia","Letícia","Rayssa"));