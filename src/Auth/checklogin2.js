let activeAccount = localStorage.getItem("activeAccount")
let checkAccount = document.getElementById("checkAccount")
if (activeAccount.includes("@") || activeAccount.includes(".")) {
    window.location.href = "../../../index.html";
}