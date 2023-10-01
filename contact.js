let name = document.getElementById("name")
let phone = document.getElementById("phone")
let mail = document.getElementById("mail")
let subject = document.getElementById("subject")
let content = document.getElementById("content")
function send() {
    let name_value = name.value
    let phone_value = phone.value
    let mail_value = mail.value
    let subject_value = subject.value
    let content_value = content.value
    if (name_value !== "" && phone_value !== "" && mail_value !== "" && subject_value !== "" && content_value !== "") {
        alert("Đã gửi thành công")
    } else {
        alert("Bạn chưa điền đầy đủ thông tin")
    }
}