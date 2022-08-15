import Block from './Block';

class Column 
{
    constructor(id)
    {
        this.id = id;
        this.blocks = [];
        this.level = 0;

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
                this.level < i ? this.level = i : this.level = this.level;
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
                this.level < i ? this.level = i : this.level = this.level;
                this.blocks[i].setToOpponent();
                return i;
            }
        }
    }

    checkAlmostWin = () =>
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

            if(current !== 'none' && currentScore >= 3)
            {
                return current;
            }
        }

        return 'none';
    }

    checkVertical = () =>
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

    resetColumn = () =>
    {
        for(let i = 0; i < this.blocks.length; i++)
        {
            this.blocks[i].reset();
        }
    }
}

export default Column;