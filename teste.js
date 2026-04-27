// Felipe Lira de Oliveira - 08/04/2026
// 3°T.D.S
// N°06

//  1. Exiba a mensagem "Olá mundo" no console.

console.log("Olá Mundo");

// 2. Crie uma variável com o seu nome e exiba o valor no console.

let nome = "Felipe Lira de Oliveira";
console.log(nome);

// 3. Some dois números e exiba o resultado

let soma = 1 + 2
console.log(soma);

// 4. Subtraia 2 numeros e exiba o valor

let tira = 1-2;
console.log(tira);

// 5. Descubra o resto da divisão de um número por outro

let resto = 4%2;
console.log(resto)

// 6. Crie uma variável booleana (true false) e exiba seu valor

let kwdsa = true
console.log(kwdsa);

// 7.Verifique se  um número é maior que outro e exiba o resultado

let maiorQue = 18 < 21;
console.log(maiorQue);

// 8. Crie duas variaveis com algum valor e exiba a concatenação
let var1 = "Lucas";
let var2 = "Miguel";

console.log(`teste ${var1} ${var2}`);

// 9. Descubra o tipo de uma variável

console.log(typeof(number)); // typeof mostra o tipo da variável

// 10. Converta numero para string.

let num1 = 10;
let num1String = String(num1);
console.log(typeof(num1String));
console.log(num1String);

// 11. String para numero

let texto = "123";
let textoNumber = Number(texto);
console.log(typeof(textoNumber));
console.log(Number(texto));

// laços de repetição

//12. Exiba no console de 0 a 10

for (let i = 0; i <= 10; i++) {
    console.log(i);
};

// 13. Exiba apenas numeros pares até 20.

for (let i = 0; i <= 20; i+=2){
    console.log(i)
};

// 14. Mostre no coonsole numero de 10 até 1

for ( let i = 10; i >=1; i--){
    console.log(i)
};

// 15. Some Numeros de 1 a 5.
let somaLoop = 0;
for (let i = 1; i<=5; i++){
    somaLoop+=i;
    console.log("Valor de i " +i+ " Valor de somaLoop " +somaLoop);
}

console.log(somaLoop);

// 16. Faça a tabuada do 3

for (let i = 1; i <= 10; i++) {
    console.log("3 x " + i + " = " + 3*i);
}

// do 9
let sominha = 0;
for (let i = 1; i <= 10; i++) {
    sominha = 9 * i;
    console.log("9 x " + i + " = " + sominha);
}

// 17.Conte quantos números são maiores que 5

let lista = [2,6,8,1,3];
let cont = 0;
for (let i =0; i<lista.length;i++ ){
    if(lista[i] > 5)cont++;
}
console.log(cont);


// 18.Percorra a string letra por letra
let palavra = "JKRMN";
for (let i =0; i<palavra.length;i++){
    console.log(palavra[i]);
}

// 19. Para um loop quando encontrar o numero 7 de 0 a 10

for ( let i = 0; i <=10; i++){
    if(i===8)break;
    console.log(i)
};

// 20. Crie uma função que exibe uma mensagem qualquer

function mensagem(){
    console.log("OI");
}
mensagem()

// 21. Função que multiplica 2 números

function multiplicar(a,b){
    return a * b;
}
console.log(multiplicar(2,3));

//22. Crie uma função que verifica se é par ou impar 

function verificar(num){
    return num % 2 ===0 ? "par" : "impar";
}
console.log(verificar(2));

//23. Crie uma função que retorne o dobro

function dobro(numerodigitado){
    return numerodigitado * 2;
}
console.log(dobro(2));

//24. Crie uma função que some elementos de um array

function somaArray(arr){
    total = 0;
    for (let i =0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}
console.log(somaArray([2,2,2]));

//25. Verifique se o número 15 é positivo e exiba uma mensagem
num1 = 15
if (num1 >= 0) {
    console.log(`O número ${num1} é positivo`);
}
else{
    console.log(`O numero ${num1} é negativo`);
}
//26. Verifique se uma pessoa com 17 anos é maior de idade

let idade = 17

if (idade >=18){
    console.log("Maior de Idade");
}
else{
    console.log("Menor de idade");
}

nota = 7.5;
media = 6.0;

if (nota >= media){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}

// Atividades com Array

// 27. Crie um array com os numeros 10,20,30,40 e exiba todos os valores

let arr = [10,20,30,40];
console.log(arr);

// 28.Crie um array com 5 frutas e exiba a primeira fruta

let frutas = ["banana", "maça", "pera", "uva", "acerola"];
console.log(frutas[0])

// 29. Adicione o número 50 no final do array [10,20,30,40]

let arr2 = [10,20,30,40];
arr.push(50);
console.log(arr);

// 30. Remove o ultimo elemento do array [1,2,3,4,5]

let numeros = [1,2,3,4,5];
numeros.pop();
console.log(numeros);

//31. Exiba quantos elementos tem o array [5,10,15,20]

let array = [5,10,15,20]
console.log(`O array tem ${array.length} elementos`);

// ou

let somalup = 0
for (let i = 1; i <= array.length; i++){
    somalup+=i;
    console.log(i);
}

//32. Some todos os números do array

let abc = [2,4,6,8];
let sum = 0;
for (let i = 0; i < abc.length; i++){
    sum = sum + abc[i];
}
console.log(`A soma dos elementos é: ${sum}`);

//33.Multiplique cada elemento do array [1, 2, 3, 4] por 2

let abcd = [1,2,3,4];
let summ = [];
for (let i = 0; i < abcd.length; i++){
    summ.push(abcd[i] * 2)
}
console.log(abcd);
console.log(summ);

//34.Verifique se a fruta "laranja" existe no array ["maçã", "banana", "uva"]

let frutinha = ["Maçã", "Banana", "Uva"];
let palavra1 = "banana";
let achou = false;

for(let i = 0;i < frutinha.length; i++){
    if(frutinha[i] == palavra1){
        achou = true;
    }
}if(achou){
    console.log(`${palavra1} foi encontrada!`);
}
else{
    console.log(`${palavra1} não foi encontrada`);
}

// 35. Exiba 1 por 1 os elementos do array ["Azul", "Verde", "Amarelo"]

let cor = ["Azul", "Verde", "Amarelo"];
for(let i = 0; i < cor.length; i++){
    console.log(cor[i]);
}

//36. Exiba o ultimo elemento do array [100, 200,300, 400, 500]

let array1 = [100, 200,300, 400, 500]
console.log(array1[4]);

//ou

let numerosarray = [100, 200,300, 400, 500];
let ultimoIndice = 4;
console.log(`O último elemento é: ${numerosarray[ultimoIndice]}`);

//ou

let numeros2 = [100, 200,300, 400, 500]
for(let i = 4; i < numeros2.length; i++){
    console.log(numeros2[i]);
}

//Atividades com matriz

//41.Crie uma matriz 2x2 com os números 1, 2 na primeira linha e 3, 4 na segunda linha

let matriz = [
    [1,2],
    [3,4]
];
console.log(matriz[0]);

//42. Exiba o elemento da linha 1, coluna 2 da matriz [[5,6], [7,8]]

let matriz1 = [
    [5,6],
    [7,8]
];

console.log(matriz1[0][1]);

//43. Exiba todos os elementos da matriz [[1,2,3], [4,5,6]]

let matriz2 = [
    [1,2,3],
    [4,5,6]
];
for(let i = 0; i<matriz2.length; i++){
for(let j = 0; j<matriz2[i].length; j++){
    console.log(`Elementos [${i}] [${j}] = ${matriz2[i][j]}`)
}
}

//44. Some todos os números da matriz [[2,4], [6,8]]
let somaprimeiralinha = 0
let somaSegunda = 0
let matriz3 = [
    [2,4],
    [6,8]
];
for(let i = 0; i<matriz3.length; i++){
    somaprimeiralinha = somaprimeiralinha + matriz3[0][i]
}

for(let i = 0; i<matriz3.length; i++){
    somaSegunda = somaSegunda + matriz3[1][i]
}
let somatotal = somaprimeiralinha + somaSegunda
console.log(somatotal);

//ou
let som = 0
let matriz4 = [
    [2,4],
    [6,8]
];

for(let i = 0; i<matriz4.length; i++){
for(let j = 0; j<matriz4[i].length; j++){
    som = som + matriz4[i][j];
    console.log(`Soma [${i}] [${j}] = ${som}`);
}
}

// 45: Crie uma matriz 3x3 com números de 1 a 9

let matrix3x3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// 46: Exiba os elementos da diagonal principal da matriz [[1,2,3],[4,5,6],[7,8,9]]

let matriz3x3 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
for (let i = 0; i< matriz3x3.length; i++){
        console.log(matriz3x3[i][i]);
}

// 47: Altere o elemento da linha 0, coluna 1 da matriz [[1,2],[3,4]] para 10

let matrixa = [
    [1,2],
    [3,4]
];
matrixa[0][1] = 10;
console.log(matrixa);

// 48: Exiba apenas a primeira linha da matriz [[10,20],[30,40],[50,60]]

let matrix10 = [
    [10,20],
    [30,40],
    [50,60]
];

console.log(matrix10[0]);

// 49: Exiba apenas os elementos da primeira coluna da matriz [[1,2],[3,4],[5,6]]

let coluna = [
    [1,2],
    [3,4],
    [5,6]
];
for (let i = 0; i < coluna.length; i++) {
    console.log(coluna[i][0]);
}

// 50: Multiplique todos os elementos da matriz [[1,2],[3,4]] por 2


let Multiplique = [
    [1,2],
    [3,4],
];
let mult = [
    [],
    []
];
for (let i = 0; i<Multiplique.length; i++){
for(let j = 0; j<Multiplique[i].length; j++){
        mult[i][j] = Multiplique[i][j] * 2;
}
}
console.log(mult);



// ==================== ATIVIDADES COM OBJETOS ====================

// 56: Exiba todas as propriedades do objeto {marca: "Nike", tamanho: 42, cor: "preto"}


let objeto = 
    {marca: "Nike",
    tamanho: 42,
    cor: "preto"}

for (let prop in objeto){
    console.log(`${prop}: ${objeto[prop]}`);
}
console.log(objeto);

// 57: Crie um objeto cachorro com nome "Rex" e um método latir que exibe "Au au!"
let cachorro =
    {nome: "Rex",
    latir: function(){
        console.log("Au au!");
    }
}
cachorro.latir();

// 58: Crie um objeto aluno com nome "Lucas" e notas [8, 7, 9]

let aluno =
    {nome: "Lucas",
    notas: [8,7,9]}

console.log(aluno);

// 59: Crie um objeto carro com marca "Fiat" e um objeto motor com potencia "1.0"

let carro = 
    {marca: "Fiat"}

let motor =
    {potencia: "1.0"}

for ( let prop in carro ){
    console.log(`${prop}: ${carro[prop]}`);
}
for (let prop in motor){
    console.log(`${prop}: ${motor[prop]}`);
}

// 60: Crie um array com 3 objetos de produtos (nome e preço) e exiba todos

let produto1 = 
    {nome: "nome1",
    preço: 50.00
    }
let produto2 =
    {nome: "nome2",
    preço: 40.00
    }
let produto3 = 
    {nome: "nome3",
    preço: 35.00
    }

for (let prop in produto1){
    console.log(`${prop}: ${produto1[prop]}`);
}
for (let prop in produto2){
    console.log(`${prop}: ${produto2[prop]}`);
}
for (let prop in produto3){
    console.log(`${prop}: ${produto3[prop]}`);
}