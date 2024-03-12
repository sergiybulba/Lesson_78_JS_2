var container2 = document.getElementById('container2');
var container3 = document.getElementById('container3');
var butt_open = document.getElementById('butt_open')
var butt_close = document.getElementById('butt_close')

butt_open.addEventListener("click", ()=>{
    container2.style.backgroundColor = '#706B67';
    container3.style.visibility = 'visible';
    butt_open.style.backgroundColor = '#646265';
})


butt_close.addEventListener("click", ()=>{
    container2.style.backgroundColor = 'lightgray';
    container3.style.visibility = 'hidden';
    butt_open.style.backgroundColor = '#EFEFEF';
})
