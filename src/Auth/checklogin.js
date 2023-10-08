let activeAccount = localStorage.getItem("activeAccount")
let loginbutton = document.getElementById("loginbutton")
let registerbutton = document.getElementById("registerbutton")
if (activeAccount.includes("@") || activeAccount.includes(".")) {
    loginbutton.href = "#"
    loginbutton.innerHTML = activeAccount
    registerbutton.href = "src/Auth/logout/logout.html"
    registerbutton.innerHTML = "Đăng xuất"
} else {
    loginbutton.href = "src/Auth/Login/Login.html"
    loginbutton.innerHTML = "Đăng nhập"
    registerbutton.href = "src/Auth/Register/Register.html"
    registerbutton.innerHTML = "Đăng ký"
}