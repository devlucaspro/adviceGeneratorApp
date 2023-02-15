let adviceNumber = document.getElementById("adviceNumber");
let randomAdvice = document.getElementById("randomAdvice");
let btnAdvice = document.getElementById("btnAdvice");

let adviceNumberRandom = [];

btnAdvice.addEventListener("click", advice);


function advice() {

    fetch("https://api.adviceslip.com/advice")
    .then((r) => r.json())
    .then((json) => {

        adviceNumberRandom = json;

        randomAdvice.innerHTML = adviceNumberRandom.slip.advice

        adviceNumber.innerHTML = `Advice #${adviceNumberRandom.slip.id}`

    })
    .catch(() => {
        randomAdvice.innerHTML = `Something is wrong, try later`

        adviceNumber.innerHTML = `Attention`
    })

}