
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const reset = document.querySelector('#reset');
const points = document.querySelector('#points');



let i=0,j=0;
let gameOver=false;
p1Button.addEventListener('click',function(e){
    if(!gameOver){
        i++;
     if (i===parseInt(points.value)){
        gameOver=true;
        p1Score.style.color = 'rgb(0, 255, 0)';
        p2Score.style.color = 'rgb(255, 0, 0)';
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
    p1Score.innerText=i;
    
}
})

p2Button.addEventListener('click',function(e){
    if(!gameOver){
        j++;
        
    if (j===parseInt(points.value)){
        gameOver=true;
        p2Score.style.color = 'rgb(0, 255, 0)';
        p1Score.style.Color = 'rgb(255, 0, 0)';
        p1Button.disabled=true;
        p2Button.disabled=true;
    }
    p2Score.innerText=j;    
}
})

reset.addEventListener('click', function(e){
    p1Score.innerText=0;
    p2Score.innerText=0;
    i=0;
    j=0;
    p1Score.style.color = '';
    p2Score.style.color = '';
    p1Button.disabled=false;
        p2Button.disabled=false;
        gameOver=false;
})
