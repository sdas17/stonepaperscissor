let userscore =0;
let computerscroe =0;
let choice= document.querySelectorAll('.choice');
let msgdemo=document.getElementById('msg');
let users=document.getElementById('user-score');
let computer=document.getElementById('comp-score');

console.log(msgdemo);
console.log(choice);

function computerplayer(){
let data =['paper','rock','scissors']
const randIdx=Math.floor(Math.random()*3);
return data[randIdx];
}
function showwinner(win){
    if (win) {
        userscore++
        users.innerText =userscore
        msgdemo.innerText ='you win game';
        msgdemo.style.backgroundColor='green'
    }else{
        computerscroe++
        computer.innerText =computerscroe

        msgdemo.innerText ='you loose game'
        msgdemo.style.backgroundColor='red'

    }
}
function getPlayer(data){
    console.log('user choice',data);
    let data3 = computerplayer();
    console.log('computer choice',data3);
    if (data == data3) {
        alert('draw')
    }else {
        let userWin = true;
        if (data3 === 'rock') {
            userWin = (data === 'paper') ? false : true;
            showwinner(userWin);
        } else if (data3 === 'paper') {
            userWin = (data === 'scissor') ? false : true;
            showwinner(userWin);
        } else {
            userWin = (data === 'rock') ? false : true;
            showwinner(userWin);
        }
    }
    
}
choice.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let idDemo =choice.getAttribute('id');
        getPlayer(idDemo)

    })
})