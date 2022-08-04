const inputs = document.querySelectorAll("input");

inputs.forEach(input => {
    input.addEventListener('input', e => {
        if (!input.validity.valid) {
            input.classList.add("error");
        } else {
            removeErrorClass(input);
        }
    });
});

function removeErrorClass(input) {
    if (input.classList.contains("error")) {
        input.classList.remove("error");
    }
}

const passwords = document.querySelectorAll(".pw-input");
let [initialPassword, confirmationPassword] = Array.from(passwords);

initialPassword.addEventListener("input", e => {
    if (initialPassword.value !== confirmationPassword.value) {
        initialPassword.classList.add("error");
        confirmationPassword.classList.add("error");
    } else {
        removeErrorClass(initialPassword);
        removeErrorClass(confirmationPassword);
    }
});

confirmationPassword.addEventListener("input", e => {
    if (initialPassword.value !== confirmationPassword.value) {
        initialPassword.classList.add("error");
        confirmationPassword.classList.add("error");
    } else {
        removeErrorClass(initialPassword);
        removeErrorClass(confirmationPassword);
    }
});

