


let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "sharjotsingh44",
    "email": "sharjotsingh44@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true

}




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
