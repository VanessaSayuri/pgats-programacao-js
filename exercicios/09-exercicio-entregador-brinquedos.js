const brinquedos = [
    "bola",
    "osso",
    "corda",
    "sino"
]

brinquedos.forEach(brinquedo =>{
    console.log(`Entregando o brinquedo : ${brinquedo}`);
    
})

console.log("Todos os brinquedos foram entregues");



const brinquedos2 = [
    "bola",
    "osso",
    "corda",
    "sino"
]

brinquedos2.forEach((brinquedo, i) =>{
    console.log(`Entregando o brinquedo ${i + 1} : ${brinquedo}`);
    
})

console.log("Todos os brinquedos foram entregues");
