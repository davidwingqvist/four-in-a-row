class Opponent {
    constructor(board)
    {
        this.turn = false;
        this.board = board;
        this.name = 'opponent';
        this.difficulty = 0;

        this.columnStatuses = [];
        for(let i = 0; i < 7; i++)
        {
            this.columnStatuses.push(false);
        }
    }

    makeMove = () =>
    {
        // Easy difficulty
        if(this.difficulty === 0)
        {
            this.makeRandomMove();
        }
        // Medium Difficulty
        else if(this.difficulty === 1)
        {
            this.makeMediumMove();
        }
    }

    makeRandomMove = () =>
    {
        const randomColumn = Math.floor(Math.random() * 7);
        this.board.columns[randomColumn].opponentPress();
    }

    makeMediumMove = () =>
    {
        for(let i = 0; i < 7; i++)
        {
            let almostWinner = this.board.columns[i].checkAlmostWin();
            // Stop the player from winning vertical win.
            if(almostWinner === 'player')
            {
                if(this.columnStatuses[i] == false)
                {
                    this.board.columns[i].opponentPress();
                    this.columnStatuses[i] = true;
                    return;
                }
 
            }
            // Try to take the vertical win.
            else if(almostWinner === 'opponent')
            {
                this.board.columns[i].opponentPress();
            }
        }

        this.makeRandomMove();
    }

    makeHardMove = () =>
    {
        
    }
}

export default Opponent;