let userScore =0;
let compScore =0;
let userChoice="";
let compChoice="";
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");


const showWinner=(userWin,userChoice,compChoice)=>{
    if (userWin===true){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("user win ");
        msg.innerText=`User Win ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = 'green';

    }else{
        compScore++;
        compScorePara.innerText=compScore
        console.log("Computer won the game!!!");
        msg.innerText=`Comp Win ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = 'red';
    }

}
const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    let randomidx=Math.floor(Math.random()*3);
    return options[randomidx];

}
const DrawGame=()=>{
    console.log("the game is Draw !!!");
    msg.innerText="Game Draw";
    msg.style.backgroundColor="#081b30"
}


const playGame=(userChoice) =>{
    let compChoice=genCompChoice();

    console.log("User =",userChoice,"Computer=",compChoice);
    if(userChoice===compChoice){
        DrawGame()
    }else{
        let userWin=true;
        if (userChoice==="rock"){
            // paper,scissor
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            // rock,scissor
            userWin = compChoice ="scissors"?false:true;
        }else{
            // rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
    

}




choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
       
        playGame(userChoice);
    });
}
);