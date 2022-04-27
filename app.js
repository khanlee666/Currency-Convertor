const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const outputFirst = document.getElementById("outputFirst");
const outputSecond = document.getElementById("outputSecond");
const currency = new Currency("RUB", "USD");
const ui = new UI();

eventListeners();

function eventListeners(){
    amountElement.addEventListener("input", exchangeCurrency);
    firstSelect.onclick = function(e){
        currency.changeFirstCurrency(e.target.textContent);

    }

    secondSelect.onclick = function(e){
        currency.changeSecondCurrency(e.target.textContent);
    }
}

function exchangeCurrency(){
    currency.changeAmount(amountElement.value);
    currency.exchange()
    .then(result => {
        ui.displayResult(result);
    })
    .catch(err => console.error(err));
}