let question1 = {
  question: 'Tam giác có một góc 35 độ và một góc 55 độ là tam giác gì?',
  A: 'Tam giác cân',
  B: 'Tam giác vuông',
  C: 'Tam giác đều',
  D: 'Tam giác thường',
  answer: 'Tam giác vuông'
}
let question2 = {
  question: '10 năm trước Nam 15 tuổi hỏi 3 tới Nam bao nhiêu tuổi?',
  A: '28 tuổi',
  B: '22 tuổi',
  C: '26 tuổi',
  D: '24 tuổi',
  answer: '28 tuổi'
}
let question3 = {
  question: 'Số tiếp theo của dãy: 1, 1, 2, 3, 5, 8 ... là?',
  A: '11',
  B: '10',
  C: '14',
  D: '13',
  answer: '13'
}
let question4 = {
  question: 'Hãy chọn ra 1 số không đúng trong dãy số sau: 3, 5, 7, 9, 11?',
  A: '3',
  B: '7',
  C: '9',
  D: '11',
  answer: '9'
}
let question5 = {
  question: '1274 = 0, 1320 = 1, 1481 = 2, 1589 = 3, 1698 = 4, 1760 = ?',
  A: '5',
  B: '4',
  C: '3',
  D: '2',
  answer: '2'
}
let question6 = {
  question: 'Trong dãy số sau dãy số nào khác các dãy còn lại?',
  A: '7200, 1116, 117',
  B: '5211, 2106, 234',
  C: '8010, 6111, 522',
  D: '4510, 3622, 181',
  answer: '4510, 3622, 181'
}
let question7 = {
  question: 'Số tiếp theo của dãy số: 1, 2, 4, 12, 60, ... là?',
  A: '132',
  B: '780',
  C: '480',
  D: '360',
  answer: '780'
}
let question8 = {
  question: '3 người cùng sơn 1 ngôi nhà trong vòng 30h. Hỏi 6 người cùng sơn trong 20h được bao nhiêu ngôi nhà?',
  A: '5/3 ngôi nhà',
  B: '1 ngôi nhà',
  C: '4/3 ngôi nhà',
  D: '2/3 ngôi nhà',
  answer: '4/3 ngôi nhà'
}
let question9 = {
  question: 'Có 2 hình vuông, hình vuông lớn có diện tích 324cm2, và có chu vi gấp 3 lần chu vi hình vuông nhỏ. Hỏi chu vi hình vuông nhỏ bằng bao nhiêu?',
  A: '32cm',
  B: '48cm',
  C: '24cm',
  D: '36cm',
  answer: '24cm'
}
let question10 = {
  question: 'Có 1 con ốc sên leo cây cau cao 10m. Vào một buổi sáng nó bắt đầu leo từ chân cây, buổi sáng nó leo được 50cm, ban đêm lại tụt xuống 10cm. Hỏi sau bao lâu nó leo được lên đỉnh cây cau?',
  A: '25 ngày đêm',
  B: '25 ngày 24 đêm',
  C: '24 ngày đêm',
  D: '24 ngày 25 đêm',
  answer: '25 ngày 24 đêm'
}
let question = [question1,question2, question3, question4, question5, question6, question7, question8, question9, question10];
let amount = question.length;
let numberQuestion = -1;
let numOder = 0;
let score = 0;
let yourAnswer = [];
let dapAn = document.querySelectorAll('.answer')

// Đặt màu cho các đáp án
function colordapAn(){
  for(let i = 0; i < dapAn.length; i++){
    dapAn[i].style.backgroundColor = "#ffffff"
  }
}

// Đặt màu cho đáp án được chọn
function choice(answerq){
  colordapAn();
  answerq.style.backgroundColor = "#ebebe0"; 
  for (let i = 0; i < question.length; i++)
  {
    if(question[i].answer == document.getElementById(answerq.id).innerText)
    {
      score +=1;
      document.getElementById('score').innerText = score + "/" + question.length;
    }
  }
  colordapAn();
  numOder += 1; 
  if(numOder < amount){
    document.getElementById('q').innerText = question[numOder].question;
    document.getElementById('a').innerText = question[numOder].A
    document.getElementById('b').innerText = question[numOder].B
    document.getElementById('c').innerText = question[numOder].C
    document.getElementById('d').innerText = question[numOder].D
  }else if(numOder = amount){
    sessionStorage.setItem ("score", document.getElementById("score").innerText);
    window.location.href = "finish.html"
  }
  
}


// Bắt đầu chơi
function start(){
  window.location.href = "quiz.html"
}

// Làm lại quiz
function tryOneMoreTime(){
  window.location.href = "quiz.html"
}
// Về trang chủ
function back(){
  window.location.href = "index.html"
}

