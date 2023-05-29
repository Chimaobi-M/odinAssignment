let first= document.querySelector("#parent");

/* function to produce random colors*/
 function randomColor(){
    ran= '#'+Math.floor(Math.random()*16777215).toString(16);
    return ran;
}

/* mouseover handler for random colors*/
function mouseoverRandom (){
    this.style.backgroundColor= randomColor();

}

/*mouseover handler for black color*/
function mouseoverBlack (){
    this.style.backgroundColor= 'black';
}



/* function to refresh grid*/
function refreshGrid(){
let clone= 2500;
for (i=0; i<clone; i++){
    let child= document.createElement("div");
    child.id= "child1";
    first.appendChild(child);
    child.addEventListener("mouseover", mouseoverRandom);
    first.style.gridTemplateColumns= 'repeat(50, 1fr)';
    first.style.gridTemplateRows= 'repeat(50, 1fr)';
}
}

refreshGrid();

/*function to remove children so that a new grid can be formed*/
function resetGrid(){while (first.firstChild){
    first.removeChild(first.lastChild);
}}

/*function to form new grid*/
function formGrid(){
    resetGrid();
   let number= prompt('enter the number of squares you want on each side');
    let double= number * number;
    let root= Math.sqrt(double);
    function returnValue(){return ('repeat('+ root +', 1fr')};
    for (i=0; i< double; i++){
        if (number > 100 || number <  2) {alert('enter a number between 2 and 100');
         refreshGrid(); break};
        let child= document.createElement('div');
        child.id= "child1";
        first.appendChild(child);
        child.addEventListener('mouseover', mouseoverRandom);
        first.style.gridTemplateColumns= returnValue();
        first.style.gridTemplateRows= returnValue();
        

    }

}


/* handler for black color button*/

function blackButtonHandler(){
    let children= document.getElementById('parent').children;
    for(i=0; i< children.length; i++){
    children[i].style.backgroundColor= 'white';
    children[i].removeEventListener('mouseover', mouseoverRandom);
    children[i].addEventListener('mouseover', mouseoverBlack);
};
}

/* handler for random color button*/
function randomButtonHandler (){
    let children= document.getElementById('parent').children;
    for(i=0; i< children.length; i++){
        children[i].style.backgroundColor= 'white';
        children[i].removeEventListener('mouseover', mouseoverBlack);
        children[i].addEventListener('mouseover', mouseoverRandom);
    }

}

/* handler for reset button*/
function resetButtonHandler(){
    resetGrid();
    refreshGrid();

}

/* eventlisteners for butttons*/
let all= document.querySelectorAll("#starter");
form.addEventListener('click', formGrid);
black.addEventListener('click', blackButtonHandler);
random.addEventListener('click', randomButtonHandler);
reset.addEventListener('click', resetButtonHandler);
