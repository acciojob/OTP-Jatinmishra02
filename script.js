//your JS code here. If required.
    const inputs = document.querySelectorAll('.code');

    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            if (input.value.length === 1) {
                if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                } else {
                    input.blur();
                }
            } else if (input.value.length === 0 && e.inputType === 'deleteContentBackward') {
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && input.value.length === 0) {
                e.preventDefault();
                if (index > 0) {
                    inputs[index - 1].focus();
                }
            }
        });
    });
