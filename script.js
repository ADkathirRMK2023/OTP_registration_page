const otpInputs = document.querySelectorAll(".inp1");
const successMessage = document.querySelector(".success-message");

otpInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
        if (event.target.value.length === 1 && index < otpInputs.length - 1) {
            otpInputs[index + 1].focus();
        }

        if (isOTPComplete()) {
            showSuccessMessage();
        }
    });

    input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0) {
            otpInputs[index - 1].focus();
        }
    });
});

function isOTPComplete() {
    for (const input of otpInputs) {
        if (input.value.length !== 1) {
            return false;
        }
    }
    return true;
}

function showSuccessMessage() {
    successMessage.style.display = "block";
}

