class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base="
        this.amount = null;
        this.outputFirst = document.getElementById("outputFirst");
        this.outputSecond = document.getElementById("outputSecond");

    }
    exchange() {
        return new Promise((resolve, reject) => {
            fetch(this.url + this.firstCurrency + `&symbols=` + this.secondCurrency)
                .then(response => response.json())
                .then(data => {
                    const parity = data.rates[this.secondCurrency];
                    const amount2 = Number(this.amount);
                    let total = parity * amount2;
                    this.outputFirst.textContent = `1 ${this.firstCurrency} = ${parity.toFixed(4)} ${this.secondCurrency}`;
                    this.outputSecond.textContent = `1 ${this.secondCurrency} = ${Number(1 / parity).toFixed(4)} ${this.firstCurrency}`;
                    resolve(total);
                })
                .catch(err => reject(err));

        })

    }
    changeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency) {
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency) {
        this.secondCurrency = newSecondCurrency;
    }

}
