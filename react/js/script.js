// information = [
//     {
//         name: 'Robin Huy',
//         born: 1990,
//         mail: 'huy.@gmail.com',
//         phone: 123456
//     },
//     {
//         name: 'Trịnh Mạnh',
//         born: 1990,
//         mail: 'manh.@gmail.com',
//         phone: 123457
//     },
//     {
//         name: 'Lưu Quý',
//         born: 1993,
//         mail: 'quy.@gmail.com',
//         phone: 123458
//     },
//     {
//         name: 'Nguyễn Tuân',
//         born: 1996,
//         mail: 'tuan.@gmail.com',
//         phone: 123472
//     }
// ]

// function getInformation() {
//     let x = information.length
//     for (i = 0; i < x; i++) {
//         document.getElementById("information").innerHTML +=
//             `<tr>
//         <td id="name">${information[i].name}</td>
//           <td id="age">${information[i].born}</td>
//           <td id="mail">${information[i].mail}</td>
//           <td id="phone">${information[i].phone}</td>
//           <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
//           </tr>`
//     }
// }
// getInformation();

// lấy dữ liệu bằng JQuery AJAX
// window.onload = function({
// $.get("https://quyluuxda.github.io/react/data.json", function (data) {
//     data = information ;
//     $("#information").html(
//         `<tr>
//            <td id="name">${data.name}</td>
//             <td id="age">${data[0].born}</td>
//             <td id="mail">${data[0].mail}</td>
//             <td id="phone">${data[0].phone}</td>
//             <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
//         </tr>`
//         )
// })
// })


// window.onload = function () {
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             document.getElementById("information").innerHTML = JSON.parse(this.responseText);
//             console.log(JSON.parse(this.responseText).information)
//         }
//     };
//     http.open('get', 'https://quyluuxda.github.io/react/data.json');
//     http.send();
// };


// window.onload = function () {
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             let data = JSON.parse(this.responseText)
//             for(let i = 0; i< data.information.length; i++){
//             document.getElementById("information").innerHTML +=
//                 `<tr>
//                    <td id="name">${data.information[i].name}</td>
//                     <td id="age">${data.information[i].born}</td>
//                     <td id="mail">${data.information[i].mail}</td>
//                     <td id="phone">${data.information[i].phone}</td>
//                     <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
//                 </tr>`
//                 ;
//             console.log(JSON.parse(this.responseText).information)
//             }
//         }
//     };
//     http.open('get', 'https://quyluuxda.github.io/react/data.json');
//     http.send();
// };


window.onload = function () {
  $.get("http://localhost:3000/information", function (data) {
    let x = data.length
    let string = ''
    for (i = 0; i < x; i++) {
      string += `<tr>
              <td>${data[i].name}</td>
                <td>${data[i].born}</td>
                <td>${data[i].mail}</td>
                <td>${data[i].phone}</td>
                <td><a href="edit.html?id=${data[i].id}"><i class="far fa-edit"> Chỉnh sửa</i><a> |
                  <button type="button" class="btn" data-toggle="modal" data-target="#exampleModal"> 
                    <i onclick="del(${data[i].id}, this)" class="far fa-trash-alt"> Xóa</i> 
                  </button>
                </td>
                </tr>`
      $("#information").html(string)
    }
  });
};

// AJax Post Method
$("#post").click(function () {
  $.post("http://localhost:3000/information",
    {
      name: document.getElementById("inputName").value,
      born: document.getElementById("inputAge").value,
      mail: document.getElementById("inputEmail").value,
      phone: document.getElementById("inputPhone").value
    },
    function (data, status) {
      console.log(data)

    });
});

// DELETE
function del(id, hideTr) {
  $('#yes').on('click', function (event) {
    $.ajax({
      url: `http://localhost:3000/information/${id}`,
      method: 'DELETE',
      contentType: 'application/json',

      success: function (result) {
        $(hideTr).parent().parent().parent().parent().hide(500)
      },
      // error: function (request, msg, error) {
      //   // handle failure
      // } 
    })
  })
  // location.reload();
}
// }

let str = decodeURIComponent(window.location.href)
x = str.split("id=")
$.get(`http://localhost:3000/information/${x[1]}`, function (data) {
  document.getElementById("inputNameEdit").value = data.name
  document.getElementById("inputAgeEdit").value = data.born
  document.getElementById("inputEmailEdit").value = data.mail
  document.getElementById("inputPhoneEdit").value = data.phone
});

$("#edit").click(function () {
  $.ajax({
    url: `http://localhost:3000/information/${x[1]}`,
    method: 'PUT',
    data: `name=${document.getElementById("inputNameEdit").value}
  &born=${document.getElementById("inputAgeEdit").value}
  &mail=${document.getElementById("inputEmailEdit").value}
  &phone=${document.getElementById("inputPhoneEdit").value}`,
    succsess: function (data) {
      alert('Load was performed.');
    }
  })
  window.location.href = "index.html"
})



