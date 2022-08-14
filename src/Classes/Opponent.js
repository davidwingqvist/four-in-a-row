class Opponent {
    constructor(board)
    {
        this.turn = false;
        this.board = board;
        this.name = 'opponent';
        this.difficulty = 0;
    }

    makeMove = () =>
    {
        // Easy difficulty
        if(this.difficulty === 0)
        {
            const randomColumn = Math.floor(Math.random() * 7);
            this.board.columns[randomColumn].opponentPress();
        }
    }
}

export default Opponent;