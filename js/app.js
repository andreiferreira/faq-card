const questions = document.querySelectorAll('.questions');
const anwsers = document.querySelectorAll('.anwsers');

anwsers.forEach(anwser => anwser.style.display = "none");

questions.forEach(question => question.addEventListener('click', function(){
    var questionId = question.id;
    var actualAnwsers = anwsers[questionId];


    if(actualAnwsers.style.display === "block"){
        actualAnwsers.style.display = "none";

        question.children[0].classList.toggle("question-selected");
        question.children[1].classList.toggle("selected");
    }else{
        actualAnwsers.style.display = "block";

        question.children[0].classList.toggle("question-selected");
        question.children[1].classList.toggle("selected");
    }
})) 