let boxes=document.querySelectorAll(".box")
let resetbtn=document.getElementById("reset-btn")
let newGame=document.getElementById("newGame")
let msgContainer=document.querySelector(".msg-container")
let msg=document.getElementById("msg")

let turn0=true; //player X , player O

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

let count=0;
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("clicked")
        count++;
        // console.log(count)
        if(count>8){
            draw();
        }
        if(turn0==true){
            box.innerText="O"
            box.classList.add("boxC1")
            box.classList.remove("boxC2")
            turn0=false;
        }
        else{
            box.innerText="X"
            box.classList.remove("boxC1")
            box.classList.add("boxC2")
            turn0=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const resetGame=()=>{
    turn0=true;
    enabledBoxes();
    msgContainer.classList.add("hide")

}


const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

showWinner=(winner)=>{
    msg.innerText=`The Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disabledBoxes();
    count=0;
}
draw=()=>{
    msg.innerText=`The Result is draw`
    msgContainer.classList.remove("hide")
    count=0;
}

const checkWinner=()=>{
    for(let patterns of winpatterns){

        // console.log("hekkk",patterns[0],patterns[1],patterns[2]);
        // console.log(
        //     boxes[patterns[0]].innerText,
        //     boxes[patterns[1]].innerText,
        //     boxes[patterns[2]].innerText
        //     );


            let positionval1=boxes[patterns[0]].innerText;
            let positionval2=boxes[patterns[1]].innerText;
            let positionval3=boxes[patterns[2]].innerText;

            if(positionval1 !="" && positionval2 !="" && positionval3!=""){
                if(positionval1==positionval2 && positionval2 == positionval3){
                    // console.log("winnerrrr",positionval1)
                    showWinner(positionval1);
                    
                }
            }
    }
}

newGame.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
