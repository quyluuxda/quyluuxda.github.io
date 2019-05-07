//
document.write('Bài 1' + '<br>')
function sapXepSo(array) {
  let kq = array.sort(function(a, b) {
    return b - a;
  });
  return kq[1];
}
document.write(sapXepSo([5, 2, 6, 0]));
//
document.write('<br>' + 'Bài 2' + '<br>')
function timMangDaiNhat(arr) {
  for (let i = 0; i < arr.length; i++) {
    let kq = arr.sort(function(a, b) {
      return b - a;
    });
    return kq[0];
  }
}
document.write(timMangDaiNhat(["sdfafkgkas", "hsfdjjsd", "fdh"]));
//
document.write("<br>" + "Bài 3:" + "<br>");
function bai3(str, target) {
  if (str.substr(-1) == target.substr(-1)) {
    document.write("true");
  } else {
    document.write("false");
  }
}
bai3("abcde", "de");
//
document.write("<br>" + "Bài 4:" + "<br>");
function bai4(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (j != i){
        if(arr[i] == arr[j]) {
        return("True");
      } 
    }
  }
}
}
document.write(bai4([
  "false1",
  "false2",
  "false1",
  "true4",
  "false5",
  "true6",
  "false7",
  "true8"
]));

//

document.write("<br>" + "Bài 5" + "<br>");
  function countTagName(tagName) {
  return(document.getElementsByTagName(tagName).length);
}
document.write(countTagName('body'))