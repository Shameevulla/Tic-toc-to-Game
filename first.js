let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turno= true;//player1,player2
const winpatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
// TO reset the game by enabling
const resetGame = () =>{
    turno = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
};
// TO fill the boxes
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        //console.log("box was clicked");
        if(turno){
            box.innerText="o";
            turno=false;
        }
        else{
            box.innerText="x";
            
            turno=true;
        }
        box.disabled= true;  //to avoid multiple change of o and x by clicking multiple times
        checkwinner();
    });
});

//to disable all buttons
const disableboxes=() => {
    for(let box of boxes){
        box.disabled=true;
    }

};
const enableBoxes=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }

};

//To show winner 
const showwinner=(winner) => {
    msg.innerText= `Congratulations ,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();

}
const checkwinner = () => {
    for(let pattern of winpatterns){
        let pos1val= boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" &&  pos2val != "" && pos3val !=""){
            if( pos1val===pos2val  && pos2val===pos3val){
                //console.log("winner", pos1val);
                showwinner(pos1val);
            }
        }
    }
};

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
