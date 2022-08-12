import Block from './Block';

class Column 
{
    constructor(id)
    {
        this.id = id;
        this.blocks = [];

        for(let i = 1; i < 7; i++)
        {
            this.blocks.push(new Block(this.id + 'b' + i.toString()));
        }
    }

    playerPress = () =>
    {
        // Check if any block is free.
        for (let i = this.blocks.length - 1; i >= 0; i--)
        {
            if(this.blocks[i].isUsed === false)
            {
                this.blocks[i].setToPlayer();
                break;
            }
        }
    }

    opponentPress = () =>
    {
        // Check if any block is free.
        for (let i = this.blocks.length - 1; i >= 0; i--)
        {
            if(this.blocks[i].isUsed === false)
            {
                this.blocks[i].setToOpponent();
                break;
            }
        }
    }

    statusCheck = () =>
    {
        let current = 'none';
        let currentScore = 0;
        for(let i = this.blocks.length - 1; i >= 0; i--)
        {
            if(this.blocks[i].usedBy === current)
            {
                currentScore++;
            }
            else
            {
                current = this.blocks[i].usedBy;
                currentScore = 1;
            }

            if(current !== 'none' && currentScore >= 4)
            {
                return current;
            }
        }

        return 'none';
    }
}

export default Column;