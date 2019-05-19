let str = decodeURIComponent(window.location.href);
x = str.split("?");
let y = x[1].replace(/[+]/g, ' ');
let a = y.split("&");
let stt = a.length;
for (let i = 0; i < stt; i++) {
    a[i] = a[i].split("=")
    document.getElementById('name').innerHTML += '<b>' + a[i][0].charAt(0).toUpperCase() + a[i][0].slice(1).toLowerCase() + '</b>' + ': ' + a[i][1] + '<br/>'
}


