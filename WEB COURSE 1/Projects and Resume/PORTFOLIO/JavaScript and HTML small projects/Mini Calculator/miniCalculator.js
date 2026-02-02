const display = document.querySelector("#calculator"); // gets the input field where numbers will appear

const keys = document.querySelectorAll("button"); // gets all the calculator buttons

keys.forEach(key => {
    key.addEventListener("click", () => {

        // CLEAR
        if (key.textContent === "C") {
            display.value = "";

        // DELETE
        } else if (key.textContent === "DEL") {
            display.value = display.value.slice(0, -1);

        // EQUALS
        } else if (key.textContent === "=") { 
            const current = display.value;
            if (current === "") return;

            let operator;
            if (current.includes("+")) operator = "+";
            else if (current.includes("-")) operator = "-";
            else if (current.includes("x")) operator = "x";
            else if (current.includes("/")) operator = "/";

            if (!operator) return;

            const parts = current.split(operator);
            const num1 = parseFloat(parts[0]);
            const num2 = parseFloat(parts[1]);
            if (isNaN(num1) || isNaN(num2)) return;

            let result;
            if (operator === "+") result = num1 + num2;
            else if (operator === "-") result = num1 - num2;
            else if (operator === "x") result = num1 * num2;
            else if (operator === "/") {
                if (num2 === 0) {
                    display.value = "Error";
                    return;
                }
                result = num1 / num2;
            }

            display.value = result;

        // DECIMAL OR NUMBER/OPERATOR
        } else {
            if (key.textContent === ".") {
                const lastNumber = display.value.split(/[\+\-\x\/]/).pop();
                if (!lastNumber.includes(".")) {
                    display.value += ".";
                }
            } else {
                display.value += key.textContent;
            }
        }

    });
});