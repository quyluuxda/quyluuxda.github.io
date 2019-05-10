//Bài 1: Cho 1 mảng có độ dài lớn hơn 2, chứa các số khác nhau. Hãy viết hàm tìm ra số lớn thứ nhì trong mảng.
document.write('Bài 1' + '<br>')
function sapXepSo(array) {
  let kq = array.sort(function(a, b) {
    return b - a;
  });
  return kq[1];
}
document.write(sapXepSo([5, 2, 6, 0]));
//Bài 2: Cho 1 mảng các chuỗi bất kỳ. Hãy viết hàm tìm ra chuỗi có độ dài lớn nhất trong mảng.
document.write('<br>' + 'Bài 2' + '<br>')
function timChuoiDaiNhat(arr) {
  for (let i = 0; i < arr.length; i++) {
    let max = arr[0].length
    if (arr[i].length > max)
    {return arr[i]};
  }
}
document.write(timChuoiDaiNhat(["we", "welcome", "welc", 'welcom']));
//Bài 3: Viết hàm có 2 tham số là 2 chuỗi str và target, dùng để kiểm tra chuỗi str có kết thúc bởi chuỗi target hay không. Kết quả trả về là true hoặc false.
document.write("<br>" + "Bài 3:" + "<br>");
function bai3(str, target) {
  if (str.slice(-target.length) === target) {
    return true;
  } else {
    return false;
  }
}
document.write(bai3("abcde", "de"));
// Bài 3 Cách dùng endsWith
 console.log('Bài 3:');
function bai3endsWith(str, target) {
  return str.endsWith(target)
}
console.log(bai3endsWith("abcde", "de1"));
console.log(bai3endsWith("abcde", "de"));
//Bài 4: Cho 1 mảng bất kỳ. Hãy kiểm tra xem trong mảng đó có phần tử nào bị lặp lại hay không.Kết quả trả về true hoặc false.
console.log('Bài 4:');
function bai4(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] === arr[j]) {
        return true;
      }else if(Number.isNaN(arr[i]) && Number.isNaN(arr[j])){return true;}
    }
  }return false
}
console.log(bai4(['abc', 3, 2, 'a', 3, 1]));
console.log(bai4(['abc', NaN, 2, 'a', NaN, 1]));
console.log(bai4(['abc', 2, 'a', NaN, 1]));
//Bài 5: Viết hàm truyền vào 1 chuỗi là tên thẻ HTML, kiểm tra xem trong file HTML có bao nhiêu thẻ đó. Kết quả trả về là số lượng thẻ (không bao gồm thẻ đóng), nếu không có trả về 0.
document.write("<br>" + "Bài 5" + "<br>");
  function countTagName(tagName) {
  return(document.getElementsByTagName(tagName).length);
}
document.write(countTagName('body'))