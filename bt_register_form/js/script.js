//chạy vòng lặp cho trường nhập dữ liệu ngày tháng năm sinh
let days = '<option>Ngày</option>';
let months = '<option>Tháng</option>';
let years = '<option>Năm</option>';
for (let i = 1; i <= 31; i++) { days += `<option value="${i}">${i}</option>` };
for (let i = 1; i <= 12; i++) { months += `<option value="${i}">Tháng ${i}</option>` };
for (let i = 2019; i >= 1930; i--) { years += `<option value="${i}">${i}<option>` };
document.getElementById('days').innerHTML = days;
document.getElementById('months').innerHTML = months;
document.getElementById('years').innerHTML = years;	    

