document.addEventListener("DOMContentLoaded", (event) => {
  const numberBtns = document.querySelectorAll(".Btn-number");
  const operatorBtns = [
    ...document.querySelectorAll(".Btn-operator"),
    document.querySelector(".Btn-equal"),
  ];
  const notImplementedBtns = document.querySelectorAll(".Btn-notImplemented");

  notImplementedBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      window.showModal("Function not implemented yet");
    });
  });

  numberBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      window.label.innerHTML += e.target.value;
      updateDecimalButtonState();
    });
  });

  operatorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      switch (e.target.value) {
        case "=": {
          try {
            window.label.textContent = eval(window.label.textContent);
          } catch (e) {
            window.showModal();
          }
          break;
        }
        case "C": {
          window.label.textContent = "";
          break;
        }
        case "BS": {
          window.label.textContent = window.label.textContent.substring(
            0,
            window.label.textContent.length - 1
          );
          break;
        }
        default: {
          console.log(e.target.value);
          window.label.textContent += e.target.value;
          break;
        }
      }
      updateDecimalButtonState();
    });
  });

  const hasDecimalPoint = () => {
    return window.label?.textContent?.includes(".");
  };

  const updateDecimalButtonState = () => {
    const decimalButton = document.querySelector('button[value="."]');
    if (decimalButton) {
      decimalButton.disabled = hasDecimalPoint();
    }
  };
  updateDecimalButtonState();
});
