let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gencompChoice = () =>{
    const gameArr = ["Rock","Paper","Scissor"];
    const random = Math.floor(Math.random() * 3);
    return gameArr[random];
};

const showWinner = (userWin) =>{
    if(userWin){ //what if we don't write anything if(userWin)
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win")
        msg.innerText = "You Win!";
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = "You Lose!";
        msg.style.backgroundColor = "Red";
    }
}

const drawgame = ()=>{
    console.log("Game was drawn");
    msg.style.backgroundColor = "Black";
    msg.innerText = "Game was drawn";
}

const playGame = (userChoice)=>{
    console.log("User choice = ",userChoice);
    const compchoice = gencompChoice();
    console.log("Comp choice = ",compchoice);

    if(userChoice == compchoice){
        drawgame();
    }
    else{
       let userWin = true;
       if(userChoice == "Rock"){
        //paper,scissor
        userWin = compchoice === "Paper"? false : true;
       }
       else if(userChoice == "Paper"){
        //rock,scissor
        userWin = compchoice === "Scissor"? false : true;
       }
       else{
        //scissor(user)
        userWin = compchoice === "Rock"? false : true;
       }
       showWinner(userWin);
    }
};

choice.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

