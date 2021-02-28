/*
    EUR - Euros
    NOK - Norwegian Krones
    USD - US Dollars
    IEP - Irish Pounds
    GBP - British Pounds
    KES - Kenyan Shillings
    NGN - Naira
*/

const currencies = {
    EUR: {
        // Exchange rates for Euros
        IEP: 0.787564,
        GBP: 0.735345,
        KES: 134.258,
        NGN: 466.431,
        NOK: 10.3145,
        USD: 1.22481,
    },
    USD: {
        // Exchange rates for US Dollars
        EUR: 0.813074,
        IEP: 0.642601,
        GBP: 0.735345,
        KES: 109.495,
        NGN: 380.946,
        NOK: 8.41066,
    },
    IEP: {
        // Exchange rates for Irish Pounds
        EUR: 1.26974,
        GBP: 1.14482,
        KES: 170.292,
        NGN: 592.221,
        NOK: 13.0937,
        USD: 1.55414,
    },
    NGN: {
        // Exchange rates for Naira
        EUR: 0.00214359,
        GBP: 0.001928,
        IEP: 0.00168821,
        KES: 0.287566,
        NOK: 0.0221091,
        USD: 0.00262513,
    },
    NOK: {
        // Exchange rates for Norwegian Krones
        EUR: 0.0970354,
        GBP: 0.0970354,
        IEP: 0.0763892,
        KES: 13.0178,
        NGN: 45.3613,
        USD: 1.35822,
    },
    GBP: {
        // Exchange rates for Norwegian Krones
        EUR: 1.10824,
        IEP: 0.872866,
        KES: 148.811,
        NGN: 518.823,
        NOK: 11.4236,
        USD: 0.735345,
    },
    KES: {
        // Exchange rates for Norwegian Krones
        EUR: 0.813074,
        GBP: 0.735345,
        IEP: 0.642601,
        NGN: 380.946,
        NOK: 8.41066,
        USD: 109.495,
    },
};

const btn = document.querySelector(".calculate-btn");
let baseCurrencyInput = document.querySelector("#currency-1"); // First currency value
let secondCurrencyInput = document.querySelector("#currency-2"); // Second currency value
let amountInput = document.querySelector("#amount"); // Amount entered by the user
let toShowResult = document.querySelector("#result");
let isValid = true;

document.querySelector("#currencyForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const baseCurrencyValue = document.querySelector("#currency-1").value;
    const secondCurrencyValue = document.querySelector("#currency-2").value;
    let amount = amountInput.value;
    let result = 0;

    if (amount === "") {
        showError(amountInput, "Please enter an amount");
        toShowResult.textContent = "";
    } else {
        showSuccess(amountInput);
    }

    if (isValid) {
        if (baseCurrencyValue === secondCurrencyValue) {
            result = amount;
        } else {
            result =
                amount * currencies[baseCurrencyValue][secondCurrencyValue];
        }

        toShowResult.textContent = `${amount} ${baseCurrencyValue} = ${result} ${secondCurrencyValue}`;
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

fetch(
    "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=CAD&amount=1",
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
    .then((data) => console.log(data));
