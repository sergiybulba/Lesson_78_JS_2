var li_arr = document.querySelectorAll('li');


li_arr.forEach((li, index) => {
    li.addEventListener("click", ()=>{
        for (let i = 0; i < li_arr.length; i++)
            li_arr[i].style.backgroundColor = '#FBF2E9';
        li.style.backgroundColor = '#FFA782';
    })
});





