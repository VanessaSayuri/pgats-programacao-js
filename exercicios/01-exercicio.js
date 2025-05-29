let nome = "Floquinho"
let idade = 3
let peso = 5
let raca = "pitbull"
let adotado = true


let nomeMaiusculas = nome.toUpperCase()
// let racaMaiuscula = raca[0].toUpperCase() + raca.slice(1).toLowerCase()
let racaMaiuscula = raca.slice(0, 1).toUpperCase() + raca.slice(1).toLowerCase()


console.log(`Nome: ${nomeMaiusculas} - Raça: ${racaMaiuscula} - Peso: ${peso}`)