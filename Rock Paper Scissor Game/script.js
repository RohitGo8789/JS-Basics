let userScore = 0;
let compScore = 0;

const compScorePara = document.querySelector("#comp_score");
const userScorePara = document.querySelector("#user_score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const drawGame = () =>{
    // console.log("the game is drawn!");
    msg.innerText="the game is drawn!";
    msg.style.backgroundColor = "rgb(9, 9, 43)";
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        compScore--;
        userScorePara.innerText = userScore;
        compScore.innerText = compScore;
        // console.log("You Won !!");
        msg.innerText = `You Won !! Your's ${userChoice} beats  comp's ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        userScore--;
        userScorePara.innerText = userScore;
        compScorePara.innerText = compScore;
        // console.log("You Lost :(");
        msg.innerText=`You Lost :( Comp's ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);

    //Generate comp choice
    const compChoice = genCompChoice();
    // console.log("comp choice = ",compChoice);

    if(userChoice === compChoice){
        //draw
        drawGame();
    }else{
        //user win situations
        let userWin = true;
        if(userChoice==="rock"){
            //comp choices -> paper nd scissors
            userWin = compChoice === "scissor" ? true : false;
        }else if(userChoice === "paper"){
            //comp choices -> rock nd scissors
            userWin = compChoice === "rock" ? true : false;
        }else{ // user choice -> scissor
            //comp choices -> rock nd paper
            userWin = compChoice === "rock" ? false : true; 
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)  =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

