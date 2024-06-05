let player = "O";
let arrayWinners =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
    
]
let playerO=[];
let playerX=[];
let finishTag = document.getElementById("finish");

const cells =[];
for(let id=1; id<10; id++ ){
    cells[id] = document.getElementById("cells" + id);
}

//fonxtio play
const play =(i) => {
    if (cells[i].innerHTML =="" && player !="finish") {
        player =player == "O" ? "X" : "O";
        cells[i].innerHTML = player;
        if(player=='O'){
            playerO.push(i)
        }else{
            playerX.push(i)

        }
        checkWinner(playerO);
        checkWinner(playerX);
    }
    if(playerO.length==5 ||playerX.length==5){
        finishTag.innerHTML=' Game Over : Draw'
        finishTag.style.backgroundColor="greenYellow";
        finishTag.style.border="black  4px solid";

        player ="finish";
    }
    
   
};
const checkWinner =(playerY)=>{
    arrayWinners.forEach((arrayWinner)=>{
        let finish = arrayWinner.every((element)=>playerY.includes(element));
        if(finish== true){
            cells[arrayWinner[0]].style.backgroundColor="rgb(153, 223, 88)";
            cells[arrayWinner[1]].style.backgroundColor="rgb(153, 223, 88)";
            cells[arrayWinner[2]].style.backgroundColor="rgb(153, 223, 88)";
            player ="finish";
            // finishTag.style.backgroundColor="greenyellow";
            finishTag.style.backgroundColor="greenYellow";
            finishTag.style.border="black  4px solid";

            finishTag.innerHTML="Game Over"
        }
    })
}