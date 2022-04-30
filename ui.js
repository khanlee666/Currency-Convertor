class UI {
    constructor() {
        this.outputResult = document.getElementById("outputResult");
    }
    displayResult(result) {
        this.outputResult.value = result.toFixed(4);
    }
    
}
