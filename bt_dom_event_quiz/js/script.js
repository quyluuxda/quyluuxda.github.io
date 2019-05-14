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
  question: 'Trong dãy số sau dãy số nào khác các dãy còn lại?',
  A: '7200, 1116, 117',
  B: '5211, 2106, 234',
  C: '8010, 6111, 522',
  D: '4510, 3622, 181',
  answer: '4510, 3622, 181'
}
let question4 = {
  question: 'Số tiếp theo của dãy số: 1, 2, 4, 12, 60, ... là?',
  A: '132',
  B: '780',
  C: '480',
  D: '360',
  answer: '780'
}
let question5 = {
  question: 'Có 2 hình vuông, hình vuông lớn có diện tích 324cm2, và có chu vi gấp 3 lần chu vi hình vuông nhỏ. Hỏi chu vi hình vuông nhỏ bằng bao nhiêu?',
  A: '32cm',
  B: '48cm',
  C: '24cm',
  D: '36cm',
  answer: '24cm'
}
let question = [question1,question2, question3, question4, question5];
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
  
}


// Chuyển câu hỏi
function nextQuestion(){
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

// Làm lại quiz
function tryOneMoreTime(){
  window.location.href = "index.html"
}

/*
<script>
    document.getElementById("returnScore").innerText = document.getElementById("score").innerText
  </script>*/