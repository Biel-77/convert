//cotação das moedas
const USD = 5.5
const EUR = 6.19
const GBP = 7.43



//obtendo elementos do formulario
const form = document.querySelector('form')

const amount = document.getElementByI('amount')

const currency = document.getElementById('currency')

//manipulando o input amount para receber somente numeros
amount.addEventListener('input', () => {
    const hasCaractersRegecx = /\D+/g
    amount.value = amount.value.replace(hasCaractersRegecx, '')
})

//captando o evento de submit do formulario
form.onsubmit = (event) => {
    event.preventDefault()

    switch(currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$")
        break
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
    }
}

//função para converter a moeda
function convertCurrency(amount, price, symbol) {
    
}