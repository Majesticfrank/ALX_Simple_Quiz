function checkAnswer(){
    let correctAnswer="4";

    let button = document.getElementById("submit-answer");
    button.addEventListener("click", checkAnswer);

    let ClickedOption = document.querySelector('input[name="quiz"]:checked');
    let feedbackElement =document.getElementById('feedback');

     if(ClickedOption){

        let userAnswer =ClickedOption.value;


        if(userAnswer===correctAnswer){
            feedbackElement.innerHTML="Correct! Well done.";
            feedbackElement.style.color="green";
        }else{
            feedbackElement.innerHTML="That's incorrect. Try again!"

        }

        }
     }



