const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 1;

function guess(){
    let userInputField = document.getElementById('input');
    let userAnswer = userInputField.value;
    let butt = document.getElementById('butt');
    let title = document.getElementById('title');
    let message = document.getElementById('message');
    

    if(userAnswer == answer ){
        document.body.removeChild(userInputField);
        document.body.removeChild(butt);
        document.body.removeChild(title);
        document.body.removeChild(message);
        let wonTitle = document.createElement('h1')
        wonTitle.innerHTML = `you guess it right. ${answer} is the answer. it took you ${guesses} guesses`;
        
        document.body.appendChild(wonTitle);
    }else if(userAnswer > 10 || userAnswer < 1){
        message.innerHTML = 'please choose a number between 1 and 10';
        message.style.color = "#FF0000"
    }else if(userAnswer > answer){
        message.innerHTML = 'pick a smaller number';
        message.style.color = "#FF0000"
    }else {
        message.innerHTML = 'pick a larger number';
        message.style.color = "#FF0000"
    }
    console.log(userAnswer)
    guesses = guesses + 1;
    console.log(guesses);
    if (guesses >= 4 && !(userAnswer == answer) ){
        lost();
    }    
    
    function lost(){
    
        document.body.removeChild(userInputField);
        document.body.removeChild(butt);
        document.body.removeChild(title);
        document.body.removeChild(message);
        let wonTitle = document.createElement('h1')
        wonTitle.innerHTML = `lost. btw, ${answer} is the answer`;
        wonTitle.style.color = "#FF0000"
        document.body.appendChild(wonTitle);
    
    }
}






console.log(answer);
