information = [
    {
        name: 'Robin Huy',
        born: 1990,
        mail: 'huy.@gmail.com',
        phone: 123456
    },
    {
        name: 'Trịnh Mạnh',
        born: 1990,
        mail: 'manh.@gmail.com',
        phone: 123457
    },
    {
        name: 'Lưu Quý',
        born: 1993,
        mail: 'quy.@gmail.com',
        phone: 123458
    },
    {
        name: 'Nguyễn Tuân',
        born: 1996,
        mail: 'tuan.@gmail.com',
        phone: 123472
    }
]

function getInformation() {
    let x = information.length
    for (i = 0; i < x; i++) {
        document.getElementById("information").innerHTML +=
            `<tr>
        <td id="name">${information[i].name}</td>
          <td id="age">${information[i].born}</td>
          <td id="mail">${information[i].mail}</td>
          <td id="phone">${information[i].phone}</td>
          <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
          </tr>`
    }
}
getInformation();
