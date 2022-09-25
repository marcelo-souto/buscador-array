let nomes = [
  "Miguel",
  "Arthur",
  "Théo",
  "Heitor",
  "Gael",
  "Davi",
  "Bernardo",
  "Gabriel",
  "Ravi",
  "Noah",
  "Samuel",
  "Pedro",
  "Benício",
  "Benjamin",
  "Matheus",
  "Isaac",
  "Anthony",
  "Joaquim",
  "Lucas",
  "Lorenzo",
  "Rafael",
  "Nicolas",
  "Henrique",
  "Murilo",
  "João Miguel",
  "Lucca",
  "Guilherme",
  "Henry",
  "Bryan",
  "Gustavo",
  "Felipe",
  "Pietro",
  "Levi",
  "Daniel",
  "João Pedro",
  "Bento",
  "Vicente",
  "Leonardo",
  "Caleb",
  "Pedro Henrique",
  "Matteo",
  "Enzo Gabriel",
  "João",
  "Antônio",
  "Emanuel",
  "Enzo",
  "Davi Lucca",
  "Caio",
  "Eduardo",
  "João Lucas",
  "Thomas",
  "Cauã",
  "Vitor",
  "José",
  "Enrico",
  "Augusto",
  "João Gabriel",
  "Francisco",
  "Otávio",
  "Yuri",
  "Valentim",
  "Vinícius",
  "Davi Lucas",
  "Rael",
  "Mathias",
  "Theodoro",
  "Yan",
  "João Guilherme",
  "Nathan",
  "Arthur Miguel",
  "Oliver",
  "Anthony Gabriel",
  "Ryan",
  "Luiz Miguel",
  "Erick",
  "João Vitor",
  "Luan",
  "Thiago",
  "Apollo",
  "Ícaro",
  "Breno",
  "Arthur Gabriel",
  "Derick",
  "Kauê",
  "Martin",
  "Luiz Felipe",
  "Raul",
  "Liam",
  "Davi Miguel",
  "Pedro Lucas",
  "José Miguel",
  "Josué",
  "Pedro Miguel",
  "Micael",
  "Yago",
  "Dominic",
  "Vitor Hugo",
  "Luiz Henrique",
  "Estevão",
  "Davi Luiz",
];

function pegarNome() {
  let valorInput = document.querySelector("#nome").value;

  valorInput = capitalizarPrimeira(valorInput).trim();

  procurarNome(valorInput, nomes);
}




function procurarNome(valorDigitado, array) {
  let pedaco = '';

  let lista = [];

  if (valorDigitado !== "") {
    array.map((item) => {
      if (
        valorDigitado == item.substr(0, valorDigitado.length) &&
        valorDigitado.length > 0
      ) {
        
        lista.push(item);

        pedaco = item.substr(0, valorDigitado.length)
      }
    });
  } else {
    lista.push("nada");
  }

  inserirNaTela(lista, pedaco)

}

function inserirNaTela(array, pedaco) {
  let resultado = document.querySelector(".resultado")
  let li = "";

  if (array.length > 0 && array != "nada") {
    array.forEach(
      (i) =>
        (resultado.innerHTML = li += `<li><strong>${pedaco}</strong>${i.replace(pedaco,'')}</li>`)
    );
  } else if (array == "nada") {
    resultado.innerHTML = "";
  } else {
    resultado.innerHTML = "Nada Encontrado";
  }
}

function capitalizarPrimeira(str) {
  let subst = str.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
    return a.toUpperCase();
  });

  return subst;
}

document.querySelector("#nome").addEventListener("keyup", pegarNome);

// let pessoa = {
//   nome: "Marcelo",
//   sobrenome: "Souto",
//   idade: 25,
// };

// let produtos = [
//   {
//     id: 1,
//     nome: "Milk Shake",
//     imagem: [
//       "./produtos/image/milkshake.jpg",
//       "./produtos/image/chocolate.jpg",
//       "./produtos/image/morango.jpg",
//       "./produtos/image/baunilha.jpg",
//       "./produtos/image/m-chocolate-display.jpg",
//       "./produtos/image/m-morango-display.jpg",
//       "./produtos/image/m-baunilha-display.jpg",
//     ],
//     tamanho: ["300ml", "500ml", "700ml"],
//     preco: [9.9, 12.9, 14.9],
//     sabor: ["chocolate", "morango", "baunilha"],
//     adicional: ["ovomaltine", "crocante", "calda em dobro", "cookie"],
//   },
//   {
//     id: 2,
//     nome: "Sorvete",
//     imagem: [
//       "./produtos/image/sorvete.jpg",
//       "./produtos/image/s-chocolate.jpg",
//       "./produtos/image/s-morango.jpg",
//       "./produtos/image/s-baunilha.jpg",
//       "./produtos/image/s-chocolate-display.jpg",
//       "./produtos/image/s-morango-display.jpg",
//       "./produtos/image/s-baunilha-display.jpg",
//     ],
//     tamanho: ["300ml", "500ml", "700ml"],
//     preco: [7.9, 9.9, 12.9],
//     sabor: ["chocolate", "morango", "baunilha"],
//     adicional: [
//       "ovomaltine",
//       "crocante",
//       "calda em dobro",
//       "biscoito",
//       "confetti",
//     ],
//   },
// ];

// let { preco, tamanho } = produtos[1];

// let escolhas = [preco, tamanho];

// console.log(escolhas);
