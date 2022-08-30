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
// let bottomRow;

// Game setup on load
window.onload = function() {
    console.log('start of game!')
    setGame();
}

//populate tiles on board
const setGame = () => {
    console.log('game has begun')
    board = [];
    //will attempt to use this instead of if/else statement in future
    // bottomRow = [5, 5, 5, 5, 5, 5, 5]
    
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
        console.log(row)
        board.push(row)
    }
    console.log(board)
}

const horizWin = () => {
    console.log(board)
    console.log(`first tile ${board[0][0]} second tile  ${board[0][1]}`)
    //this is the where the horizontal win logic will go
    for(let row = 0; row < rows; row++) {
        for(let col = 0; col < columns; col++){
            // if(board[row][col])
            // console.log(document.getElementById(`${row}-${col}`).classList.contains('taken'))
            
            if (document.getElementById(`${row}-${col}`).classList.contains('red') && document.getElementById(`${row}-${col + 1}`).classList.contains('red') && document.getElementById(`${row}-${col + 2}`).classList.contains('red') && document.getElementById(`${row}-${col + 3}`).classList.contains('red')){
                console.log("red wins!")
            }

            if (document.getElementById(`${row}-${col}`).classList.contains('yellow') && document.getElementById(`${row}-${col + 1}`).classList.contains('yellow') && document.getElementById(`${row}-${col + 2}`).classList.contains('yellow') && document.getElementById(`${row}-${col + 3}`).classList.contains('yellow')){
                console.log("yellow wins!")
            }
        }
    }
    
}

const vertWin = () => {
    //this is the where the vertical win logic will go

}

const diagWin = () => {
    //this is the where the horizontal win logic will go

}

const oppDiagWin = () => {
    //this is the where the opposite diagonal win logic will go
    
}

const checkWin = () => {
    horizWin();
    vertWin();
    diagWin();
    oppDiagWin();
}

//setting board to colors if game not over
function setColor() {
    // endGame ? curPlay = 'none' : null
    if (endGame){
        console.log('game over!!!');
        return;
    }

    //splitting id='0-0' to row, col or [0, 0]
    // console.log(this.id)
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
    checkWin();
    
}
