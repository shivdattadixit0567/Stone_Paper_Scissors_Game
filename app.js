let val1 = 0 , val2 = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#computer-score")

const genCompChoice = () =>{
    const option = ["rock","paper","scissors"];
    let idx = Math.floor(Math.random()*3) // it generates random number between 0 to 2
    return option[idx];
}

const playGame = (userChoice) =>{
    console.log(`user choice = ${userChoice}`)
    let compChoice = genCompChoice();
    // console.log(`computer choice = ${compChoice}`);
    if(userChoice === compChoice){
        msg.innerText = "Game was draw"
        msg.style.backgroundColor = "grey"
    }else{
        let userWin = true;
        if(userChoice==="rock"){
            userWin = compChoice==="paper" ? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice==="scissors" ? false : true;
        }else{
            userWin = compChoice==="rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        val1++;
        userScore.innerText = `${val1}`;
        // console.log(`you won`);
        msg.innerText = `You win! , Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    }
    else{
        val2++;
        compScore.innerText = `${val2}`
        // console.log(`you loss`);
        msg.innerText = `You loose , ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        console.log(`choice was clicked`)
        playGame(userChoice);
    })
})