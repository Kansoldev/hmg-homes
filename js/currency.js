/*
    EUR - Euros
    NOK - Norwegian Krones
    USD - US Dollars
    GBP - British Pounds
    KES - Kenyan Shillings
    NGN - Naira
*/

const btn = document.querySelector(".calculate-btn");
let baseCurrencyInput = document.querySelector("#currency-1");
let secondCurrencyInput = document.querySelector("#currency-2");
let amountInput = document.querySelector("#amount");
let toShowResult = document.querySelector("#result");
let isValid = true;

document.querySelector("#currencyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const baseCurrencyValue = document.querySelector("#currency-1").value;
    const secondCurrencyValue = document.querySelector("#currency-2").value;
    let amount = amountInput.value;

    if (amount === "") {
        showError(amountInput, "Please enter an amount");
        toShowResult.textContent = "";
    } else {
        showSuccess(amountInput);
    }

    if (isValid) {
        fetch(
            `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${baseCurrencyValue}&to=${secondCurrencyValue}&amount=${amount}`,
            {
                method: "GET",
                headers: {
                    "x-rapidapi-key":
                        "c15c23b586msh5cddfaaa76098aap1273d6jsn58376803f268",
                    "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                toShowResult.textContent = `${amount} ${baseCurrencyValue} = ${
                    data.rates[`${secondCurrencyValue}`].rate_for_amount
                } ${secondCurrencyValue}`;
            })
            .catch((err) => {
                // console.log(`Couldn't convert currency -> ${err}`);
                toShowResult.textContent = "An Error occured while converting";
            });
    }
});

function showError(field, message) {
    isValid = false;
    const formGroup = field.parentElement;
    formGroup.querySelector("small").innerHTML = message;
    formGroup.querySelector(".form-control").classList.add("error-border");
}

function showSuccess(field) {
    isValid = true;
    const formGroup = field.parentElement;
    formGroup.querySelector("small").innerHTML = "";
    formGroup.querySelector(".form-control").classList.remove("error-border");
}
