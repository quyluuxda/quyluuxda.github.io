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



// window.onload = function () {
//     $.get("https://quyluuxda.github.io/react/data.json", function (data) {
//         information = data
//         for (let i = 0; i < data.information.length; i++) {
//             $("#information").html(
//                 `<tr>
//             <td id="name">${data.information[0].name}</td>
//             <td id="age">${data.information[0].born}</td>
//             <td id="mail">${data.information[0].mail}</td>
//             <td id="phone">${data.information[i].phone}</td>
//             <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
//             </tr>`
//             )

//         }
//     }
// };


window.onload = function (){
    $.get("https://quyluuxda.github.io/react/data.json", function(data){
        information = data
        let x = data.information.length
        let string = ''
            for (i = 0; i < x; i++) {
              string += `<tr>
              <td id="name">${data.information[i].name}</td>
                <td id="age">${data.information[i].born}</td>
                <td id="mail">${data.information[i].mail}</td>
                <td id="phone">${data.information[i].phone}</td>
                <td><i class="far fa-edit"> Chỉnh sửa</i> | <i class="far fa-trash-alt"> Xóa</i></td>
                </tr>`
                $("#information").html(string)}
    });
  };