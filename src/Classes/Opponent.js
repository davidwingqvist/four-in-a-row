class Opponent {
    constructor(board)
    {
        this.turn = false;
        this.board = board;
        this.name = 'opponent';
    }

    makeMove = () =>
    {
        const randomColumn = Math.floor(Math.random() * 7);
        this.board.columns[randomColumn].opponentPress();
    }
}

export default Opponent;