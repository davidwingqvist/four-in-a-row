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

    checkWin()
    {
        for(let i = 0; i < 7; i++)
        {
            let isAnyWinner = this.columns[i].statusCheck();
            if(isAnyWinner !== 'none')
            {
                this.isOver = true;
                console.log(isAnyWinner);
            }
        }
    }

    render()
    {
        return this.renderBoard
    }
}

export default Board;