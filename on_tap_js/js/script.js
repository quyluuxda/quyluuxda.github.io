// Xử lý số
console.log("Xử lý số")
// Bài 1: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu
function tinhTheTichHinhCau(r) {
  let kq = (4 / 3 * Math.PI * r * r).toFixed(3);
  return kq;
}
console.log(tinhTheTichHinhCau(5));

/* Bài 2: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7). */
function tinhTong(a, b) {
  let kc = Math.abs(a - b);
  let kq = 0;
  if (a < b) {
    for (i = a + 1; i < a + kc; i++) {
      kq += i;
    }
  } else {
    for (i = b + 1; i < b + kc; i++) {
      kq += i;
    }
  }
  return kq;
}
console.log(tinhTong(6, 8));
console.log(tinhTong(5, 1));
console.log(tinhTong(-5, -1));

// Bài 3: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function checkNT(a) {
  if (a < 2) {
    return false;
  }
  for (i = 2; i < a; i++) {
    if (a % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(checkNT(7));
console.log(checkNT(1));
console.log(checkNT(2));
console.log(checkNT(9));


// Bài 4: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.
function getSumBai4(x) {
  let tong = 0;
  for (let i = 2; i < x; i++) {
    if (checkNT(i)) {
      tong += i;
    }
  }
  return tong;
}
console.log(getSumBai4(12));

// Bài 5: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.
function tinhTongBai5(x) {
  let tong = 0;
  for (let i = 1; i <= Math.sqrt(x); i++) {
    if (x % i == 0 && x / i !== i) {
      tong += x / i + i;
    }
    if (x / i == i) {
      tong = tong + i;
    }
  }
  return tong;
}
console.log(tinhTongBai5(10));
console.log(tinhTongBai5(6));


/*Bài 6: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số chẵn thuộc dãy Fibonacci (0, 1, 1, 2, 3,
5, 8, ...) mà nhỏ hơn hoặc bằng tham số truyền vào.*/
function sumArr(n) {
  let arr = [];
  let tong = 0;
  let a = 0;
  let b = 1;
  let c;
  for (let i = 1; i <= n; i++) {
    c = b;
    b = a + b;
    a = c;
    if (c <= n) {
      arr.push(c);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < n && arr[i] % 2 == 0) {
      tong += arr[i];
    } else {
      tong = tong;
    }
  }
  return tong;
}
console.log(sumArr(22));


// xử lý chuỗi
console.log("Xử lý chuỗi")

/* Bài 1: Chuyển 1 chuỗi gồm nhiều từ thành chuỗi mới viết hoa các chữ cái đầu tiên của mỗi từ. Ví dụ:''HELLO world'' => ''Hello World''.*/
function firstLetter1(string) {
  let tach = string.split(" ");
  let newString = ""
  for (let i = 0; i < tach.length; i++) {
    newString += (tach[i].charAt(0).toUpperCase() + tach[i].slice(1).toLowerCase()) + " ";
  }
  return newString.slice(0, newString.length - 1)
}
console.log(firstLetter1("đây là bài tập viết hoa chữ cái đầu từ"));

/*Bài 2: Chuyển 1 chuỗi gồm nhiều từ thành dạng Spinal case. Ví dụ: ''HELLO world'' => ''hello-world''.*/
function spinalCase(string) {
  let arr = string.toLowerCase().split(" ");
  return arr.join("-");
}
console.log(spinalCase("Hello woRd"))

/*Bài 3:Bài 3: Viết hàm truyền vào 2 chuỗi, kiểm tra xem chuỗi thứ nhất có chứa toàn bộ ký tự nằm trong
chuỗi thứ 2 hay không, kết quả trả về true nếu có và false nếu không (không phân biệt hoa thường).
Ví dụ ''HELLO world'' có chứa ''how'' nhưng không chứa ''hey''.*/
function bai3(string1, string2) {
  str1 = string1.toLowerCase();
  str2 = string2.toLowerCase();
  for (let i = 0; i < str2.length; i++) {
    if (str1.indexOf(str2[i]) < 0) {
      return false;
    }
  }
  return true;
}
console.log(bai3("string12", "gir2"))

/*Bài 4: Cho 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (đọc xuôi hay ngược
đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc
false. Ví dụ ''Race car'' trả về true, ''hello world'' trả về false.*/
function checkBai4(string) {
  let str = string.toLowerCase().split(" ").join("")
  for (let i = 0; i < str.length; i++) {
    if (str[i] != str[str.length - i - 1]) {
      return false;
    }
  }
  return true;
}
console.log(checkBai4("RACE car"))
console.log(checkBai4("hello world"))

//xử lý mảng
console.log("Xử lý mảng")

/*Bài 1: Viết hàm loại bỏ các giá trị sai trong 1 mảng. Các giá trị sai bao gồm: false, null, undefined,
NaN, 0, ''''.*/
function bai3_1(arr) {
  return arr.reduce(function (total, value) {
    if (Number.isNaN(value)) return total;
    if (!value) return total;
    total.push(value)
    return total;
  }, []);
}
console.log(bai3_1([false, true, null, undefined, NaN, 0, "", 1, " "]));

/*Bài 2: Viết hàm so sánh mảng, truyền vào 2 mảng bất kỳ, kết quả trả về là 1 mảng chỉ chứa những
phần tử không đồng thời nằm trong 2 mảng truyền vào. Ví dụ truyền vào [1, 2, 3] và [1, 3, 4, 5] thì
kết quả trả về là mảng [2, 4, 5].*/
function compareArr(firstArr, secondArr) {
  let newArr = [];
  let firstArrLength = firstArr.length
  let secondArrLength = secondArr.length
  for (let i = 0; i < firstArrLength; i++) {
    let temp = 0;
    for (let j = 0; j < secondArrLength; j++) {
      if (secondArr[j] == firstArr[i]) {
        temp = 1;
        break;
      }
    }
    if (temp == 0) { newArr.push(firstArr[i]) }
  }
  for (let i = 0; i < secondArrLength; i++) {
    let temp = 0;
    for (let j = 0; j < firstArrLength; j++) {
      if (secondArr[i] == firstArr[j]) {
        temp = 1;
        break;
      }
    }
    if (temp == 0) { newArr.push(secondArr[i]) }
  }
  return newArr;
}
console.log(compareArr([1, 2, 3], [1, 3, 4, 5]));

/*Bài 3: Cho 1 mảng các chuỗi. Viết hàm lọc ra các phần tử có độ dài lớn nhất. Ví dụ với tham số
[''aba'', ''aa'', ''ad'', ''c'', ''vcd''] thì kết quả trả về [''aba'', ''vcd''].*/
function locDoDaiLonNhat(arr) {
  let newArr = []
  let max = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= max) {
      max = arr[i].length;
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j].length == max) {
      newArr.push(arr[j])
    }
  }
  return newArr
}
console.log(locDoDaiLonNhat(["aba", "aa", "ad", "c", "vcd"]))

/*Bài 4: Cho 2 số nguyên dương n và m. Tạo ra 1 mảng 2 chiều n x m là các số nguyên liên tiếp
(tính từ 1) theo kiểu ziczac. Ví dụ với n = 3 và m = 3 thì kết quả là mảng 2 chiều như sau 
[ [1, 2, 3], [6, 5, 4], [7, 8, 9] ].*/
function bai4(m, n) {
  var dapan = [];
  for (var i = 0; i < m; i++) {
    var row = [];
    for (var j = 0; j < n; j++) {
      if (i % 2 === 0) {
        row.push(i * n + j + 1);
      }
      else {
        row.push((i + 1) * n - j);
      }
    }
    dapan.push(row);
  }
  return dapan;
}
console.log(bai4(3, 3))

// Xử lý object
console.log("Xử lý object");

/*Bài 1: Cho 1 object. Viết hàm kiểm tra xem object đó có phải là object rỗng hay không (không có thuộc
tính nào). Kết quả trả về true hoặc false.*/
function isEmpty(obj) {
    if (Object.getOwnPropertyNames(obj).length === 0) {
      return true;
    }
    return false;
  }
console.log(isEmpty({}));
console.log(isEmpty({ name: "An", age: 20 }));

/*Bài 2: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
Viết hàm sắp xếp lại mảng trên theo tên học viên (không phân biệt hoa thường).*/
let object1 = { name: 'Huy', gender: 'Male', age: 20 }
let object2 = { name: 'anh', gender: 'Female', age: 21 }
let object3 = { name: 'quỳnh', gender: 'Male', age: 22 }
let object4 = { name: 'Ngọc', gender: 'Male', age: 19 }
let object5 = { name: 'hiền', gender: 'Female', age: 19 }
arr = [object1, object2, object3, object4, object5]
function sapXep(arr) {
  return arr.sort(function (a, b) {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  })
}
console.log(sapXep(arr))

/*Bài 3: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
Viết hàm sắp xếp lại mảng trên theo tuổi học viên từ cao đến thấp.*/
function sapXepTuoi(arr) {
  return arr.sort(function (a, b) {
    return a.age - b.age
  })
}
console.log(sapXepTuoi(arr))

/*Bài 4: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
Viết hàm lọc ra những sinh viên nào có tên bắt đầu bằng chữ ''H'' hoặc ''h''.*/
function getNameH(arr) {
  return arr.filter(arr => arr.name[0].toLowerCase() == "h")
}
console.log(getNameH(arr))

/*Bài 5: Cho 1 mảng các object chứa thông tin sinh viên dạng { name: ''Huy'', gender: ''Male'', age: 20 }.
Viết hàm tính ra số tuổi trung bình của toàn bộ sinh viên.*/
function tinhTuoiTB(arr) {
  tong = 0;
  for (let i = 0; i < arr.length; i++) {
    tong += arr[i].age
  }
  return tong / arr.length
}
console.log(tinhTuoiTB(arr))

// Bài tập tổng hợp
console.log("Bài tập tổng hợp")

// Bài 1: Cho 2 số a và b. Viết hàm giải phương trình bậc nhất dạng ax + b = 0.
function giaiPTBacNhat(a, b) {
  return -b / a;
}
console.log(2, 2)

// Bài 2: Cho 3 số a, b và c. Viết hàm giải phương trình bậc 2 dạng ax² + bx + c = 0.
function giaiPTBacHai(a, b, c) {
  delta = b * b - 4 * a * c;
  if (delta < 0) { return {} }
  else {
    x1 = (-b + Math.sqrt(delta)) / (2 * a)
    x2 = (-b - Math.sqrt(delta)) / (2 * a)
  }
  return { x1, x2 }
}
console.log(giaiPTBacHai(-2, 1, 1))

/*Bài 3: Viết hàm có 2 tham số, tham số đầu tiên là 1 chuỗi thời gian t dạng ''giờ:phút:giây'', tham số
thứ 2 là 1 số x <= 1000. Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t. Ví
dụ với t = ''9:20:56'' và x = 7 thì kết quả là ''9:21:3''.*/
function thoiGian(t, x) {
  arr = t.split(":");
  h = Math.floor(x / 3600)
  m = Math.floor((x % 3600) / 60)
  s = (x % 3600) % 60
  arr[0] = +arr[0] + h
  arr[1] = +arr[1] + m
  arr[2] = +arr[2] + s
  return arr.join(":")
}
console.log(thoiGian("9:20:56", 7))

/*Bài 4: Một con ốc sên leo từ đáy giếng lên miệng giếng, biết ban ngày leo được x mét, ban đêm lại
bị tụt xuống y mét, hỏi sau bao nhiêu ngày thì ốc sên sẽ lên được đến miệng giếng. Viết hàm giải
bài toán trên với 3 tham số h là chiều cao của giếng, x và y như mô tả trên.*/
function tinhTG(h, x, y) {
  return Math.ceil((h - y) / (x - y))
}
console.log(tinhTG(20, 7, 3))
console.log(tinhTG(19, 7, 3))
console.log(tinhTG(15, 7, 3))

/*Bài 5: Cho 1 số nguyên, hãy viết hàm sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số
nhỏ nhất có thể (không tính số 0 đầu tiên). Ví dụ với tham số 53751 thì kết quả là 13557.*/
function bai5_5(x) {
  let arr = x.toString().split("");
  return parseInt(arr.sort().join(""))
}
console.log(bai5_5(32540459347))