let activeAccount = localStorage.getItem("activeAccount")
if (activeAccount.includes("@") || activeAccount.includes(".")) {
    window.location.href = "../../../index.html";
}