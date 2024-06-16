let boxes=document.querySelectorAll(".box");

let turnO=true;
const winning_patterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
             box.innerText="X";
             turnO=true;
        }
        box.disabled=true;
        checkWinner();
       

    })
})


const checkWinner=()=>{
for(let pattern of winning_patterns){
    pos1=boxes[pattern[0]].innerText;
    pos2=boxes[pattern[1]].innerText;
    pos3=boxes[pattern[2]].innerText;
    if(pos1 !="" && pos2!="" && pos3!=""){
        if(pos1===pos2 && pos2==pos3){
            console.log("winner");
            boxes.forEach((box)=>{
                box.disabled=true;

            });
            printWinner(pos1);
        }
    }
}
}

//message popup
let msg=document.querySelector("#msg");
let reset=document.querySelector("#restart");
let newgame=document.querySelector("#ng");
let msgContainer=document.querySelector(".msg-container");
const printWinner=(winner)=>{
       msg.innerText=`WINNER IS   "${winner}" !`;
       msg.style.color="white";
       msg.style.fontSize="5vh";
       
       msgContainer.classList.remove("hide");

}

//restart and new game button
reset.addEventListener("click",()=>{
    enableBoxes();
    turnO=true;
    msgContainer.classList.add("hide");
})

 const enableBoxes=()=>{
    boxes.forEach((box)=>{
        box.disabled=false;
        box.innerText="";
    })
}

newgame.addEventListener("click",()=>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");
})
