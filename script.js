let textArea = document.querySelector('#inputarea');
let cal = true;

function display(value){ //to display in the textarea
    
    if(cal === true){
        textArea.value = textArea.value += value;
        // console.log(textArea.value);
    }else if(isNaN(value)){
        textArea.value = textArea.value += value;
        cal = true;
    }else{
        textArea.value = '';
        textArea.value = textArea.value += value;
        cal = true;
    }
}

function del(){ //to delete the last value in textarea
    let str = textArea.value;
    if(str.length > 0){
        textArea.value = str.slice(0 , -1)
    }
}

function reset(){ //to reset the textarea
    textArea.value = '';
}


function solve(){
    let number = eval(textArea.value);
    textArea.value = number;
    cal = false; 
}

function multiplyHandlers(){ //it will covert the 'x' to * 
    let newarr = textArea.value.split('');
    // console.log(newarr);
    newarr.forEach((element, index) => {
        if(element === "x"){
            newarr[index] = '*';
        }
    });
    
    textArea.value = newarr.join('');
    solve();
}


document.querySelector(".btns").addEventListener("click", (e) =>{
    
    let clickedValue = e.target.textContent;

    if(!isNaN(clickedValue) || clickedValue === "+" || clickedValue === "-" 
    || clickedValue === "/" || clickedValue === "x" || clickedValue === "."){
        // console.log(clickedValue);
        display(clickedValue);
    }
    else if(clickedValue === "DEL"){
        del();
    } else if(clickedValue === "RESET"){
        reset();
    }
    else if(clickedValue === "="){
        // ans();
        multiplyHandlers();
    }
})