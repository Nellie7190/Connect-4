//Red and Yellow Players and game start with Red
const redPlay = "R";
const yelPlay = "Y";
let curPlay = redPlay;

//endGame changes after win
let endGame = false;
let board;

//Board setup
const rows = 6;
const columns = 7;

//Lowest rows in columns
let bottomRow;

// Game setup on load
window.onload = function() {
    console.log('start of game!')
    setGame();
}

//populate tiles on board
const setGame = () => {
    console.log('game has begun')
    board = [];
    bottomRow = [5, 5, 5, 5, 5, 5, 5]
    
    //Goes through the entire board by row, then col
    for (let rowId = 0; rowId < rows; rowId++) {
        let row = [];
        for (let colId = 0; colId < columns; colId ++) {
            //Creating Empty holes for peices on board
            row.push(' ');

            //HTML
            //creating <div> id='0-0' class='tile' <div>
            let tile = document.createElement('div');
            //Giving each tile a unique ID based on placement
            tile.id = rowId.toString()+ "-" + colId.toString();
            //Adding a class of 'tile' to each tile
            tile.classList.add('tile');
            tile.addEventListener('click', setColor);
            document.getElementById('board').append(tile);
        }
        
        board.push(row)
    }
}

//setting board to colors if game not over
function setColor() {
    // endGame ? curPlay = 'none' : null
    if (endGame){
        console.log('game over!!!');
        return;
    }

    //splitting id='0-0' to row, col or [0, 0]
    console.log(this.id)
    let coordinates = this.id.split('-');
    let row = parseInt(coordinates[0]);
    let col = parseInt(coordinates[1]);


    board[row][col] = curPlay;
    let tile = this;

        if (curPlay == redPlay) {
                if (!document.getElementById(`${5}-${col}`).classList.contains('taken')){
                    document.getElementById(`${5}-${col}`).classList.add('red','taken');
                    curPlay = yelPlay;
                } else if (!document.getElementById(`${4}-${col}`).classList.contains('taken')){
                    document.getElementById(`${4}-${col}`).classList.add('red', 'taken');
                    curPlay = yelPlay;
                } else if (!document.getElementById(`${3}-${col}`).classList.contains('taken')){
                    document.getElementById(`${3}-${col}`).classList.add('red', 'taken');
                    curPlay = yelPlay;
                } else if (!document.getElementById(`${2}-${col}`).classList.contains('taken')){
                    document.getElementById(`${2}-${col}`).classList.add('red', 'taken');
                    curPlay = yelPlay;
                } else if (!document.getElementById(`${1}-${col}`).classList.contains('taken')){
                    document.getElementById(`${1}-${col}`).classList.add('red', 'taken');
                    curPlay = yelPlay;
                } else if (!document.getElementById(`${0}-${col}`).classList.contains('taken')){
                    document.getElementById(`${0}-${col}`).classList.add('red', 'taken');
                    curPlay = yelPlay;
                } 
            } else {
            //grab id of 5nd row , and checks if contains class of "taken" then continues upwards checking
                if (!document.getElementById(`${5}-${col}`).classList.contains('taken')){
                    document.getElementById(`${5}-${col}`).classList.add('yellow','taken');
                    curPlay = redPlay;
                } else if (!document.getElementById(`${4}-${col}`).classList.contains('taken')){
                    document.getElementById(`${4}-${col}`).classList.add('yellow', 'taken');
                    curPlay = redPlay;
                } else if (!document.getElementById(`${3}-${col}`).classList.contains('taken')){
                    document.getElementById(`${3}-${col}`).classList.add('yellow', 'taken');
                    curPlay = redPlay;
                } else if (!document.getElementById(`${2}-${col}`).classList.contains('taken')){
                    document.getElementById(`${2}-${col}`).classList.add('yellow', 'taken');
                    curPlay = redPlay;
                } else if (!document.getElementById(`${1}-${col}`).classList.contains('taken')){
                    document.getElementById(`${1}-${col}`).classList.add('yellow', 'taken');
                    curPlay = redPlay;
                } else if (!document.getElementById(`${0}-${col}`).classList.contains('taken')){
                    document.getElementById(`${0}-${col}`).classList.add('yellow', 'taken');
                    curPlay = redPlay;
                } 
            }
    



            ///////////////////////////////////////////
            // if (document.getElementById(`${5}-${col}`).classList.contains('taken')) {
            //     console.log('second row')
            //     document.getElementById(`${4}-${col}`).classList.add('red', 'taken')
            //     curPlay = yelPlay
            // }  else if (document.getElementById(`${4}-${col}`).classList.contains('taken')) {
            //     console.log('third row')
            //     document.getElementById(`${3}-${col}`).classList.add('red', 'taken')
            //     curPlay = yelPlay
            // }  else if (document.getElementById(`${3}-${col}`).classList.contains('taken')) {
            //     console.log('???')
            //     document.getElementById(`${2}-${col}`).classList.add('red', 'taken')
            //     curPlay = yelPlay
            // }  else if (document.getElementById(`${2}-${col}`).classList.contains('taken')) {
            //     console.log('???')
            //     document.getElementById(`${1}-${col}`).classList.add('red', 'taken')
            //     curPlay = yelPlay
            // } else {
            //         console.log('first row')
            //         document.getElementById(`${5}-${col}`).classList.add('red', 'taken')
            //         curPlay = yelPlay
            //     } 
        //     } else {
        //     // tile.classList.add('yellow');
        //     if (!document.getElementById(`${5}-${col}`).classList.contains('taken')){
        //         document.getElementById(`${5}-${col}`).classList.add('yellow', 'taken')
        //         curPlay = redPlay
        //     } else if (document.getElementById(`${5}-${col}`).classList.contains('taken')) {
        //         document.getElementById(`${4}-${col}`).classList.add('yellow', 'taken')
        //         curPlay = redPlay
                
        //     }  else if (document.getElementById(`${4}-${col}`).classList.contains('taken')) {
        //         console.log('???')
        //         document.getElementById(`${3}-${col}`).classList.add('yellow', 'taken')
        //         curPlay = redPlay
        //     }  else if (document.getElementById(`${3}-${col}`).classList.contains('taken')) {
        //         console.log('???')
        //         document.getElementById(`${2}-${col}`).classList.add('yellow', 'taken')
        //         curPlay = redPlay
        //     }  else if (document.getElementById(`${2}-${col}`).classList.contains('taken')) {
        //         console.log('???')
        //         document.getElementById(`${1}-${col}`).classList.add('yellow', 'taken')
        //         curPlay = redPlay
        //     }
        // }



            // document.getElementById(`${5}-${col}`).classList.add('red', 'taken')
            // // tile.classList.add('red');
            // curPlay = yelPlay;
            // if (document.getElementById(`${5}-${col}`).classList.contains('taken')){
            //     document.getElementById(`${4}-${col}`).classList.add('red', 'taken')
            // }
        // } else {
        //     // tile.classList.add('yellow');
        //     document.getElementById(`${5}-${col}`).classList.add('yellow', 'taken')
        //     curPlay = redPlay
        // }
    // } 


    // if (curPlay == redPlay) {
    //     document.getElementById(`${5}-${col}`).classList.add('red')
    //     // tile.classList.add('red');
    //     curPlay = yelPlay;
    // } else {
    //     // tile.classList.add('yellow');
    //     document.getElementById(`${5}-${col}`).classList.add('yellow')
    //     curPlay = redPlay
    // }
}
