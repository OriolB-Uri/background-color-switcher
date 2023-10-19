// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

// function colorGrey(){
//     body.setAttribute("id", "grey");
// }

// function colorWhite(){
//     body.setAttribute("id", "white");
// }

// function colorBlue(){
//     body.setAttribute("id", "blue");
// }

// function colorYellow(){
//     body.setAttribute("id", "yellow");
// }

function buttonClick(e){
    // switch (e.target.id) {
    //     case "grey":
    //         console.log("gris");
    //         body.setAttribute("id", "grey");
    //         break;
        
    //     case "white":
    //         console.log("blanc");
    //         body.setAttribute("id", "white")
    //         break;
    
    //     case "blue":
    //         console.log("blau");
    //         body.setAttribute("id", "blue");
    //         break;

    //     case "yellow":
    //         console.log("gorc");
    //         body.setAttribute("id", "yellow");
    //         break;

    //     default:
    //         break;
    // }

    body.setAttribute("id", e.target.id);
}
