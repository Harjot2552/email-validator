btn.addEventListener("click", async(e) => {
    e.preventDefault();
    console.log("ih")
    resultCont.innerHTML = `<img src="loading.svg" alt="">`
    let key = "ema_live_EiQsAYWpDfuZcgqbICF4luRiqliQNLS3vNP1vZA6"
    let email = document.getElementById("email").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result  = await res.json();
    let str = ``;
    for (key of Object.keys(result)) {
        if(result[key] !== "" && result[key] !== " "){
            str = str + `<div>${key}: ${result[key]}</div>`

        }
        // console.log(key)

    }

    resultCont.innerHTML = str;
})
