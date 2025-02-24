document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("multiplication-form");
    const numberInput = document.getElementById("number");
    const multiplicatorInput = document.getElementById("multiplicator");
    const multiplicationTable = document.getElementById("multiplication-operations");
    const multiplicationTitle = document.querySelector("#multiplication-title span");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita recarregar a página

        const number = parseInt(numberInput.value);
        const multiplicator = parseInt(multiplicatorInput.value);

        if (isNaN(number) || isNaN(multiplicator)) {
            alert("Por favor, insira números válidos.");
            return;
        }

        multiplicationTitle.textContent = number; // Atualiza o título da tabuada
        multiplicationTable.innerHTML = ""; // Limpa os resultados anteriores

        for (let i = 1; i <= multiplicator; i++) {
            const operationRow = document.createElement("div");
            operationRow.classList.add("operation-row");

            const operation = document.createElement("span");
            operation.classList.add("operation");
            operation.textContent = `${number} × ${i} =`;

            const result = document.createElement("span");
            result.classList.add("result");
            result.textContent = number * i;

            operationRow.appendChild(operation);
            operationRow.appendChild(result);
            multiplicationTable.appendChild(operationRow);
        }
    });
});
