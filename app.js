const amountElement = document.querySelector("#amount");
const firstSelect = document.querySelector("#firstCurrency");
const secondSelect = document.querySelector("#secondCurrency");
const outputFirst = document.getElementById("outputFirst");
const outputSecond = document.getElementById("outputSecond");
const currency = new Currency("RUB", "USD");
const ui = new UI();

eventListeners();

function eventListeners() {
    amountElement.addEventListener("input", exchangeCurrency);
    exchangeValue();
    firstSelect.onclick = function (e) {
        currency.changeFirstCurrency(e.target.textContent);
        currency.exchange()
            .then(result => {
                ui.displayResult(result);
            })
            .catch(err => console.error(err));

    }

    secondSelect.onclick = function (e) {
        currency.changeSecondCurrency(e.target.textContent);
        exchangeValue();
        currency.exchange()
            .then(result => {
                ui.displayResult(result);
            })
            .catch(err => console.error(err));
    }
}

function exchangeCurrency() {
    exchangeValue();
    currency.changeAmount(amountElement.value);
    currency.exchange()
        .then(result => {
            ui.displayResult(result);
        })
        .catch(err => console.error(err));
}

function exchangeValue() {
    let replaced = amountElement.value.replace(",", ".");
    amountElement.value = replaced;
    let d = amountElement.value.replace(/\s/g, '').toLocaleString("fi-Fi").replace(",", ".")
    let p = d.toLocaleString("fi-Fi");
    let m = Number(d.replace(/\s/g, ''));
    amountElement.value = m

    if (d.includes(".")) {
        amountElement.value = d;
        
    }
    else {
        amountElement.value = p
    }

    currency.changeAmount(m);
}

