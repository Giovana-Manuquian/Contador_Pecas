console.log("-----------------------------------------------------------")
console.log("                       CONTADOR DE PEÇAS                   ")
console.log("-----------------------------------------------------------")

console.log("___________________________")

let listaDePecas = ["Parafuso", "Broca", "Pneu", "Motor"];

console.log(`Digite a lista de peças: ${listaDePecas}`)

if (listaDePecas.length > 10) {
    console.log("Não foi possível cadastrar por excesso de peças")
} else {
    console.log("Limite permitido")
}

console.log("___________________________")

let peso = 100

console.log(`Digite o peso da peça: ${peso}`)

if (peso >= 100) {
   console.log("Peso permetido")
} else {
   console.log("O peso está abaixo do normal")
}

console.log("___________________________")

let peca = "Motor";

console.log(`Digite o nome da peça: ${peca}`)

if (peca.length < 3) {
   console.log("Erro, nome da peça é muito pequeno");
} else {
   console.log("Nome da peça válido")
}

