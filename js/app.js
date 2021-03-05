const questions = document.querySelectorAll('.questions');
const anwsers = document.querySelectorAll('.anwsers');

anwsers.forEach(anwser => anwser.style.display = "none");

questions.forEach(question => question.addEventListener('click', function(){
    var questionId = question.id;
    anwsers.item[questionId].style.display === "block";
})) 