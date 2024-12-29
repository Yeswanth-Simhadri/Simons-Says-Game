gameSeq=[];
userSeq=[];
let h2=document.querySelector("h2");
btns=["yellow","red","green","purple"];
let gameStarted=false;
let level=0;
document.addEventListener("keypress",function(){
    if(gameStarted == false){
        console.log("game started")
        gameStarted=true;
    }
    levelUp();
});
function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(()=>{
        btn.classList.remove("flash");
    },250);
}
function userFlash(btn){
    btn.classList.add("userFlash")
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },200);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`
    let randIndx=Math.floor(Math.random()*4);
    let randColor=btns[randIndx];
    let randBtn =document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game over!! Your Score is press <b>${level} any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(()=>{
            document.querySelector("body").style.backgroundColor="white";

        },100)
        reset();
    }
}
function reset(){
    level=0;    
    gameStarted=false;
    gameSeq=[];
    userSeq=[];
}
function btnPress(){
let btn =this;
console.log(btn);
userSeq.push(btn.getAttribute("id"));
userFlash(btn);
checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}