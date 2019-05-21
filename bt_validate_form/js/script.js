// js điều kiện đăng ký
$('#content').on('submit', function () {
    let isValid = true;
    if ($('#fullname').val().match(/^([ \u00c0-\u01ffa-zA-Z'])+$/) == null || $('#fullname').val().length <= 2) {
        $('#fullname').next('span').text("Name must be more than 2 digits and not include numberic digit");
        isValid = false;
    } else {
        $('#fullname').next('span').text("");
    }
    if ($('#email').val().match(/^((([!#$%&'*+\-/=?^_`{|}~\w])|([!#$%&'*+\-/=?^_`{|}~\w][!#$%&'*+\-/=?^_`{|}~\.\w]{0,}[!#$%&'*+\-/=?^_`{|}~\w]))[@]\w+([-.]\w+)*\.\w+([-.]\w+)*)$/) == null) {
        $('#email').next('span').text("Email is empty or invalid");
        isValid = false;
    } else {
        $('#email').next('span').text("");
    }
    if ($('#password').val().match(/^(?=.*\d).{4,8}$/) == null) {
        $('#password').next('span').text("Password must be between 4 and 8 digits long and include at least one numeric digit.");
        isValid = false;
    } else {
        $('#password').next('span').text("");
    }
    if (
        $('#phonenumber').val().match(/[0-9]{10,10}/g) == null || $('#phonenumber').val()[0] !== "0") {
        $('#phonenumber').next('span').text("Phone numbers must be 10 numbers and start with 0.");
        isValid = false;
    } else {
        $('#phonenumber').next('span').text("");
    }
    if ($('#address').val().trim() == "") {
        $('#address').next('span').text("Address is empty.");
        isValid = false;
    } else {
        $('#address').next('span').text("");
    }
    if ($('#dateofbirth').val().match(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/) == null) {
        $('#dateofbirth').next('span').text("dates of form is dd/mm/yyyy , dd/mm/yy, dd-mm-yyyy, dd-mm-yy.");
        isValid = false;
    } else {
        $('#dateofbirth').next('span').text("");
    }
    return isValid;
})
// js cho trang hiển thị thông tin đăng ký thành công
let str = decodeURIComponent(window.location.href);
x = str.split("?");
let y = x[1].replace(/[+]/g, ' ');
let a = y.split("&");
let stt = a.length;
for (let i = 0; i < stt; i++) {
    a[i] = a[i].split("=")
    document.getElementById('name').innerHTML += '<b>' + a[i][0].charAt(0).toUpperCase() + a[i][0].slice(1).toLowerCase() + '</b>' + ': ' + a[i][1] + '<br/>'
}


