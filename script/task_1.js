var textblock = document.getElementById('textblock');


textblock.onchange = function() {
    // alert(this.value);
    let current_text = this.value;
    let arr = [];
    for (let i = 0; i < current_text.length; i++){
        if(isNaN(current_text[i]) || current_text[i] == ' '){
            if(arr.length == 0 || arr[arr.length - 1] == ' '){
                arr.push(current_text[i].toUpperCase());
            }
            else{
                arr.push(current_text[i]); 
            }
        }
    }
    let new_text = arr.join('');
    this.value = new_text;
}

// textblock.addEventListener("compositionupdate", handleEvent);  // compositionupdate - не працює

// function handleEvent(event) {
//     console.log("letter");
//     alert(textblock.value);
//     let current_text = this.value;
//     if(!isNaN(current_text[current_text.length - 1])){
//         this.value = current_text.slice(0, -1);
//         alert("check")
//     }

// };

function clean() {
    textblock.value = "";
}
