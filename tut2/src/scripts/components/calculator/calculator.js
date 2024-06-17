class Calculator {
  constructor(type = scientificCalcSchema, refId = "app") {
    this.type = type;
    this.refId = refId;
  }

  renderCalc = () => {
    convertToCalc(scientificCalcSchema, document.getElementById(this.refId));
  };

  removeDarkButton = () => {
    const allChilds = document.getElementById("app").allChilds;
  };
}

const calc = new Calculator();
calc.renderCalc();
