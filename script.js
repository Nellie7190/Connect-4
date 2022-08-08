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

// Game setup on load
window.onload = function() {
    setGame();
}

//populate tiles on board
const setGame = () => {
    board = [];
    
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
            document.getElementById('board').append(tile)
        }
        
        board.push(row)
    }
}

//setting board to colors if game not over
const setColor = () => {
    if (endGame){
        return
    }

    //splitting id='0-0' to row, col or [0, 0]
    let coordinates = this.id.split('-');
    let row = parseInt(coordinates[0])
    let col = parseInt(coordinates[1])

    board[row][col] = curPlay;
    let tile = this;
    if (curPlay == playerRed) {
        tile.classList.add('red');
        // curPlay = yelPlay;
    } else {
        tile.classList.add('yellow')
    }
}