class UI {
    constructor(firstSelect, secondSelect) {
        this.firstSelect = firstSelect;
        this.secondSelect = secondSelect;
        this.outputFirst = outputFirst;
        this.outputSecond = outputSecond;
        this.outputResult = document.getElementById("outputResult");
    }
    displayResult(result) {
        this.outputResult.value = result.toFixed(4);
    }
    // outFirst() {
    //     this.outputFirst.textContent = `1 ${this.firstCurrency} = ${parity.toFixed(4)} ${this.secondCurrency}`;
    // }
    // outSecond() {
    //     this.outputSecond.textContent = `1 ${this.secondCurrency} = ${Number(1 / parity).toFixed(4)} ${this.firstCurrency}`;
    // }
}
