/*
 Documentação do JAVASCRIPT

Exemplo para colocar no formato da moeda de cada país!
*** É uma ferramenta interna do JavaScript***

 new Intl.NumberFormat("en-US", {  // ORIGEM DO PAÍS
        style: "currency",         // QUAL O ESTILO VAI SER ARRUMADO : MOEDA
        
        currency: "USD" ,           // QUAL É O CIFRÃO DA MOEDA : DOLLAR
        }).format(convertedValue)  // VALOR QUE VAI SER CONVERTIDO

**************************************************************************************
*/

// *************************** botão de converter o valor ****************************

const covertButton = document.querySelector(".convert-button")
// seleciona o botão de converter
const currencySelect = document.querySelector(".currency-select")
// seleciona a classe do select para trazer o tipo de moeda que foi selecionada 

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    // aqui ele selecionou o input, mas pegou somente o seu valor (.value) e não o input todo.
    // só funcionou com a variável "inputCurrencyValue", criada aqui dentro da função.
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    // valor em real para converter.
    const currencyValueConverted = document.querySelector(".currency-value")
    // valor convertido.

    //****** cotação das moedas *******

    const bitcoinToday = 306.309         // bitcoin (BTC)
    const dolarToday = 4.95             // dolar (USD)
    const euroToday = 5.38               // euro (EUR)
    const libraToday = 6.27              // libra esterlina (GBP)

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrencyValue)
    //.innerHTML vai mudar o texto que estava para currencyValueToConvert, mas já formatado com o padrão
    // da moeda que nesse caso, fica no formato de Real

    if (currencySelect.value == "bitcoin") {
        //Se o select estiver selecionado o valor de bitcoin, então ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",                                             // BITCOIN
            currency: "BTC",
        }).format(inputCurrencyValue / bitcoinToday)
    }

    if (currencySelect.value == "dolar") {
        //Se o select estiver selecionado o valor de dolar, então ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",                                              // DOLLAR
            currency: "USD",
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        //Se o select estiver selecionado o valor de euro, então ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",                                              // EURO
            currency: "EUR",
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        //Se o select estiver selecionado o valor de libra, então ele entra aqui
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",                                              // LIBRA
            currency: "GBP",
        }).format(inputCurrencyValue / libraToday)
    }

}

// ********************* seleção de tipo de moedas ***********************************

function changeCurrency() {

    const currencyName = document.getElementById("currency-name") // deixa sem # senão da erro
    // seleciona o texto da moeda a ser convertida, o #id não pode ser repetido
    const currencyImg = document.querySelector(".img-currency")
    // seleciona o src da imagem a ser convertida para ser trocada

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"   
        currencyImg.scr = "./assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/libra.png"
    }

    convertValues() // ele aciona a função já a conversão na mesma hora que mudar o tipo de moeda!
}

currencySelect.addEventListener("change", changeCurrency)
covertButton.addEventListener("click", convertValues)