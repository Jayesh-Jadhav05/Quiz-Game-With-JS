const Easy_Level = document.querySelector('.easy');
const Medium_Level = document.querySelector('.medium');
const Hard_Level = document.querySelector('.hard');
const Check_Ans = document.querySelector('#check');
const First_Page = document.querySelector('.First-page');
const Game_Part = document.querySelector('.Game-part');
const OutPut = document.getElementById('output');
const passe = document.querySelector('#passes');
const play_Again = document.querySelector('#play');
const guess = document.querySelector('#noguess');


// music list
// ********************************
   const Game_Over = new Audio('GameOver.wav');
   const Game_Start = new Audio('startGame.mp3');
   const Game_Win = new Audio('winGame.mp3');

function b (No_of_passes,no) {
    
    var count = 0;
  function checkanss(){
        let user = document.querySelector('#inputval').value;
        if(user == ""){
            OutPut.innerHTML = "please enter number";
        }
        else if(user == no){
            Game_Win.play();
            OutPut.innerHTML = `👍You Won In ${count} Passes👍`;
            OutPut.style.color = "blue";
            Check_Ans.style.display = "none";
        }
        else if(user < no){
            OutPut.innerHTML = "😢your guessed Is Low😢";
            OutPut.style.color = "red";
            count++;
        
        }
         
        else{
            OutPut.innerHTML = "😢your guessed is high😢";
            OutPut.style.color = "red";
            count++;
        }
        if(count != No_of_passes){
           passe.innerHTML = `Pass : ${count}/${No_of_passes}`;
        }
        else{
            Game_Over.play();
            OutPut.innerHTML = "😢your passes is over😢";
            OutPut.style.color = "#fff";
            Check_Ans.style.display = "none";
        }
}


Check_Ans.addEventListener('click',checkanss);

}




Easy_Level.addEventListener('click', () =>{
    Game_Start.play();
    First_Page.classList.add('hide-first-page');
    Game_Part.classList.remove('hide-game');
    var no = Math.ceil(Math.random() * 10);
    b(5,no);
})

Medium_Level.addEventListener('click',() =>{
    Game_Start.play();
    First_Page.classList.add('hide-first-page');
    Game_Part.classList.remove('hide-game');
    guess.innerHTML = "Guess a Number Between 1-50";
    var no = Math.ceil(Math.random() * 50);
    b(7,no);

})

Hard_Level.addEventListener('click',() =>{
    Game_Start.play();
    First_Page.classList.add('hide-first-page');
    Game_Part.classList.remove('hide-game');
    guess.innerHTML = "Guess a Number Between 1-100";
    var no = Math.ceil(Math.random() * 100);
    b(15,no);

})