document.addEventListener('DOMContentLoaded', (event) => {
    const numberBtns = document.querySelectorAll('.Btn-number');
    const operatorBtns = document.querySelectorAll('.Btn-operator');
    const notImplementedBtns = document.querySelectorAll('.Btn-notImplemented');

    notImplementedBtns.forEach((btn => {
        btn.addEventListener('click', (e) => {
            window.showModal('Function not implemented yet');
        });
    }))

    numberBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            window.label.innerHTML += e.target.value;
            updateDecimalButtonState();
        });
    });

    operatorBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            switch(e.target.value) {
                case '=': {
                    try {
                        window.label.textContent = eval(label.textContent);
                    } catch (e) {
                        window.showModal();
                    }
                    break;
                }
                case 'C': {
                    window.label.textContent = '';
                    break;
                }
                default: {
                    window.label.textContent += e.target.value;
                    break;
                }
            }
            updateDecimalButtonState();
        })
    });

    const hasDecimalPoint = () => {
        return window.label?.textContent?.includes('.');
    };

    const updateDecimalButtonState = () => {
            const decimalButton = document.querySelector('button[value="."]');
            if (decimalButton) {
                decimalButton.disabled = hasDecimalPoint();
            }
        };
    updateDecimalButtonState();
});