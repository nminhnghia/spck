let email = document.getElementById("email")
let password = document.getElementById("password")
let emailError = document.getElementById("emailError")
let passError = document.getElementById("passError")
function register() {
    let accounts = localStorage.getItem("accounts") || "{}";
    accounts = JSON.parse(accounts);
    accounts[email.innerText] = password.innerText;
    localStorage.setItem("accounts", JSON.stringify(accounts));
}
function check() {
    let valueEmail = email.value
    let valuePassword = password.value
    if (valueEmail == "") { // kiểm tra xem có nhập email chưa
        emailError.innerHTML = "Chưa nhập email"
        emailError.style = "color: red; display: block;"
    } else if (!valueEmail.includes("@") || !valueEmail.includes(".")) { // kiểm tra xem email có đúng định dạng chưa (có dấu chấm, dấu @ chưa)
        emailError.innerHTML = "Email sai định dạng"
        emailError.style = "color: red; display: block;"       
    } else { // nếu đã nhập email thì sẽ không báo lỗi
        emailError.style = "display: none;"
    }
    if (valuePassword == "") { // kiểm tra xem có nhập password chưa
        passError.innerHTML = "Chưa nhập password"
        passError.style = "color: red; display: block;"
    } else { // nếu đã nhập password thì sẽ không báo lỗi
        passError.style = "display: none;"
    }
}

