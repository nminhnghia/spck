let email = document.getElementById("email")
let password = document.getElementById("password")
function register() {
    let accounts = localStorage.getItem("accounts") || "{}";
    accounts = JSON.parse(accounts);
    accounts[email.value] = password.value;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}

