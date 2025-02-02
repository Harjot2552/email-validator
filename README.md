# 📧 Email Validator

A powerful and simple **Email Validator** built using **HTML**, **CSS**, and **JavaScript**, leveraging the [emailvalidation.io](https://www.emailvalidation.io) API to check the validity of email addresses.

## 🕒 Features
- Real-time email validation.
- Provides detailed information such as mailbox state, domain, and more.
- User-friendly interface with result display.

## 🗒 Preview
![Email Validator Preview](https://harjotrocks.com/javascript/email-validator/)

## 🛠️ How to Use
1. Clone or download this repository.
2. Open `index.html` in any modern web browser.

## 📚 Code Explanation
### HTML Structure
The form accepts user input for email validation:
```html
<form action="/submit" method="post">
  <label for="email">Email:</label>
  <input placeholder="enter your email" type="text" id="email" name="email" required>
  <br><br>
  <button id="btn" type="submit">Submit</button>
</form>
```

### JavaScript Logic
The script makes an API call to `emailvalidation.io` and dynamically displays validation results:
```javascript
btn.addEventListener("click", async (e) => {
  e.preventDefault();
  resultCont.innerHTML = `<img src="loading.svg" alt="Loading">`;
  let key = "ema_live_EiQsAYWpDfuZcgqbICF4luRiqliQNLS3vNP1vZA6";
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`;
  let res = await fetch(url);
  let result = await res.json();
  let str = "";
  for (key of Object.keys(result)) {
    if (result[key] !== "" && result[key] !== " ") {
      str += `<div>${key}: ${result[key]}</div>`;
    }
  }
  resultCont.innerHTML = str;
});
```

## ✨ Demo
Open `index.html` directly in your browser to use the email validator.

## 🌐 Technologies Used
- HTML5
- CSS3
- JavaScript ES6
- [emailvalidation.io API](https://www.emailvalidation.io)

## 🛠️ Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Harjot2552/email-validator.git
   ```
2. Navigate to the project directory and open `index.html`.

## ❤️ Contribution
Feel free to submit issues or pull requests to improve this project.

