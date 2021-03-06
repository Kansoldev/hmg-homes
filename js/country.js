/* ====== STATES ====== */
const ireland = ["Dublin", "Belfast", "Cork", "Derry", "Limerick"];

const nigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "FCT(Abuja)",
];

const uk = ["London", "Manchester", "Birmingham", "Glasgow", "Liverpool"];

const usa = [
    "Washington",
    "Maryland",
    "California",
    "Massachusetts",
    "Colorado",
];

const norway = ["Oslo", "Stavanger", "Tromso", "Berjen", "Geirangerfjord"];

const sa = [
    "Cape Town",
    "Johannesburg",
    "Durban",
    "Pretoria",
    "Port Elizabeth",
];

const kenya = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];
/* ====== END OF STATES ====== */

document.querySelector("#country").addEventListener("change", function () {
    switchName();
});

function switchName() {
    const country = document.querySelector("#country").value;

    switch (country) {
        case "ireland":
            getCountry(ireland);
            break;
        case "nigeria":
            getCountry(nigeria);
            break;
        case "uk":
            getCountry(uk);
            break;
        case "usa":
            getCountry(usa);
            break;
        case "norway":
            getCountry(norway);
            break;
        case "sa":
            getCountry(sa);
            break;
        case "kenya":
            getCountry(kenya);
            break;
        default:
            return;
    }
}

function getCountry(name) {
    document.querySelector("#location").innerHTML = "";

    name.map((state) => {
        // create option tag
        const option = document.createElement("option");

        // append all the states values in their respective value property
        option.value = state;

        // create a text node for each state and append to the option tag
        option.appendChild(document.createTextNode(state));

        return option;
    }).forEach((states) => {
        document.querySelector("#location").appendChild(states);
    });
}
