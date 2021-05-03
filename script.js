
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
let btn4 = document.querySelector('#btn4');

btn1.addEventListener('click', ()=>{
    document.getElementById("code1").style.visibility ='visible';
    document.getElementById("code2").style.visibility ='hidden';
});
btn2.addEventListener('click', ()=>{
    document.getElementById("code1").style.visibility ='hidden';
    document.getElementById("code2").style.visibility ='visible';
    
});
btn3.addEventListener('click', ()=>{
    document.getElementById("code3").style.visibility ='visible';
    document.getElementById("code4").style.visibility ='hidden';
});
btn4.addEventListener('click', ()=>{
    document.getElementById("code3").style.visibility ='hidden';
    document.getElementById("code4").style.visibility ='visible';
    
});