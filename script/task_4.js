var butt_next = document.getElementById('butt_next')

var circle1 = document.getElementById('circle1')
var circle2 = document.getElementById('circle2')
var circle3 = document.getElementById('circle3')

var temp = 1;


butt_next.addEventListener("click", ()=>{
    // alert("click");
    if(temp == 1){
        circle1.style.backgroundColor = '#8A8A8A';
        circle2.style.backgroundColor = '#FF9600';
        temp = 2;
    }
    else if (temp == 2){
        circle2.style.backgroundColor = '#8A8A8A';
        circle3.style.backgroundColor = '#008000';
        temp = 3;
    }
    else if (temp == 3){
        circle3.style.backgroundColor = '#8A8A8A';
        circle1.style.backgroundColor = '#FF0000';
        temp = 1;
    }

    // if(circle1.style.backgroundColor == '#FF0000'){      // чомусь не працює таке порівняння, у цьому випадку circle1.style.backgroundColor == пустий string ??
    //     circle1.style.backgroundColor = '#8A8A8A';
    //     circle2.style.backgroundColor = '#FF9600';
    // }
    // else if (circle2.style.backgroundColor == '#FF9600'){
    //     circle2.style.backgroundColor = '#8A8A8A';
    //     circle3.style.backgroundColor = '#008000';
    // }
    // else if (circle3.style.backgroundColor == '#008000'){
    //     circle3.style.backgroundColor = '#8A8A8A';
    //     circle1.style.backgroundColor = 'FF0000';
    // }
})




