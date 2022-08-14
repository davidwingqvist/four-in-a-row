import React from 'react';
import '../AppStyle.css';
import Column from './Column';
import Opponent from './Opponent';

class Board {
    constructor()
    {
        this.columns = [];
        for (let i = 1; i < 8; i++)
        {
            this.columns.push(new Column('c' + i.toString()));
        }
        this.opponent = new Opponent(this);
        this.isOver = false;

        this.renderDifficultySelection = (

            <div className='selectionArea'>

                <ul className='selectionButtons'>
                    <button className='buttonSelected' id='easyButton' onClick={() => this.onDifficultSelect(0)}>Easy</button>
                    <button className='button' id='mediumButton' onClick={() => this.onDifficultSelect(1)}>Medium</button>
                    <button className='button' id='hardButton' onClick={() => this.onDifficultSelect(2)}>Hard</button>
                </ul>

            </div>

        )

        this.renderBoard = (

            <div className='gameArea' id='gameArea'>
                <ul className='column' id= 'c1' onClick={this.onColumnClick.bind(this, 0)}>
                    <div className='block' id='c1b1'> </div>
                    <div className='block' id='c1b2'> </div>
                    <div className='block' id='c1b3'> </div>
                    <div className='block' id='c1b4'> </div>
                    <div className='block' id='c1b5'> </div>
                    <div className='block' id='c1b6'> </div>
                </ul>
                <ul className='column' id= 'c2' onClick={this.onColumnClick.bind(this, 1)}>
                    <div className='block' id='c2b1'> </div>
                    <div className='block' id='c2b2'> </div>
                    <div className='block' id='c2b3'> </div>
                    <div className='block' id='c2b4'> </div>
                    <div className='block' id='c2b5'> </div>
                    <div className='block' id='c2b6'> </div>
                </ul>
                <ul className='column' id= 'c3' onClick={this.onColumnClick.bind(this, 2)}>
                    <div className='block' id='c3b1'> </div>
                    <div className='block' id='c3b2'> </div>
                    <div className='block' id='c3b3'> </div>
                    <div className='block' id='c3b4'> </div>
                    <div className='block' id='c3b5'> </div>
                    <div className='block' id='c3b6'> </div>
                </ul>
                <ul className='column' id= 'c4' onClick={this.onColumnClick.bind(this, 3)}>
                    <div className='block' id='c4b1'> </div>
                    <div className='block' id='c4b2'> </div>
                    <div className='block' id='c4b3'> </div>
                    <div className='block' id='c4b4'> </div>
                    <div className='block' id='c4b5'> </div>
                    <div className='block' id='c4b6'> </div>
                </ul>
                <ul className='column' id= 'c5' onClick={this.onColumnClick.bind(this, 4)}>
                    <div className='block' id='c5b1'> </div>
                    <div className='block' id='c5b2'> </div>
                    <div className='block' id='c5b3'> </div>
                    <div className='block' id='c5b4'> </div>
                    <div className='block' id='c5b5'> </div>
                    <div className='block' id='c5b6'> </div>
                </ul>
                <ul className='column' id= 'c6' onClick={this.onColumnClick.bind(this, 5)}>
                    <div className='block' id='c6b1'> </div>
                    <div className='block' id='c6b2'> </div>
                    <div className='block' id='c6b3'> </div>
                    <div className='block' id='c6b4'> </div>
                    <div className='block' id='c6b5'> </div>
                    <div className='block' id='c6b6'> </div>
                </ul>
                <ul className='column' id= 'c7' onClick={this.onColumnClick.bind(this, 6)}>
                    <div className='block' id='c7b1'> </div>
                    <div className='block' id='c7b2'> </div>
                    <div className='block' id='c7b3'> </div>
                    <div className='block' id='c7b4'> </div>
                    <div className='block' id='c7b5'> </div>
                    <div className='block' id='c7b6'> </div>
                </ul>
            </div>

        );
    }

    onColumnClick(column)
    {
        if(!this.isOver)
        {
            this.columns[column].playerPress();
            this.checkWin();
            if(!this.isOver)
            {
                this.opponent.makeMove();
                this.checkWin();
            }
        }
        else
        {
            console.log('Game is already over!')
        }
    }

    onDifficultSelect(diff)
    {
        this.opponent.difficulty = diff;
        if(diff === 0)
        {
            document.getElementById('easyButton').style.backgroundColor = 'white';
            document.getElementById('mediumButton').style.backgroundColor = 'black';
            document.getElementById('hardButton').style.backgroundColor = 'black';
        }
        else if(diff === 1)
        {
            document.getElementById('easyButton').style.backgroundColor = 'black';
            document.getElementById('mediumButton').style.backgroundColor = 'white';
            document.getElementById('hardButton').style.backgroundColor = 'black';
        }
        else if(diff === 2)
        {
            document.getElementById('easyButton').style.backgroundColor = 'black';
            document.getElementById('mediumButton').style.backgroundColor = 'black';
            document.getElementById('hardButton').style.backgroundColor = 'white';
        }
    }

    checkWin()
    {
        let isAnyWinner = 'none';
        for(let i = 0; i < 7; i++)
        {
            isAnyWinner = this.columns[i].checkVertical();
            if(isAnyWinner !== 'none')
            {
                this.isOver = true;
                return;
            }
        }

        isAnyWinner = this.checkHorizontal();
        if(isAnyWinner !== 'none')
        {
            this.isOver = true;
            return;
        }

        isAnyWinner = this.checkDiagonal();
        if(isAnyWinner !== 'none')
        {
            this.isOver = true;
            return;
        }
    }

    checkHorizontal()
    {
        for(let i = 0; i < 6; i++)
        {
            let currentPl = 'none';
            let score = 0;
            for(let j = 0; j < 7; j++)
            {
                if(this.columns[j].blocks[i].usedBy === currentPl)
                {
                    score++;
                }
                else
                {
                    score = 1;
                    currentPl = this.columns[j].blocks[i].usedBy;
                }

                if(score >= 4 && currentPl !== 'none')
                {
                    return currentPl;
                }
            }
        }

        return 'none';
    }

    checkDiagonal()
    {
        return 'none';
    }

    resetBoard()
    {
        this.isOver = false;

    }

    render()
    {
        return this.renderBoard
    }
}

export default Board;