import React, {useRef} from 'react';
import Player from './Classes/Player';
import Board from './Classes/Board';
import './AppStyle.css';
import BackgroundImage from './Images/age_of_calam_wallpaper.jpg';

function App() {

  let board = new Board();
  let player = new Player();

  const nameInput = useRef();

  function setPlayerName()
  {
    let name = nameInput.current.value;
    if(name)
      player.setName(name)
    
    nameInput.current.value = null;
    document.getElementById('startingDiv').style.visibility = 'hidden';
    document.getElementById('gameArea').style.visibility = 'visible';
    document.getElementById('gameDiv').style.visibility = 'visible';

    document.getElementById('welcomeText').innerText = 'Welcome to the game, ' + name + '!';
  }

  // Here is where we get input and render to the player.
  return (
    <div>

      <img src={BackgroundImage} className='backgroundImg'></img>

      <div id='startingDiv' className='centered'>
        <p className='centeredText'> Welcome to <span className='boldText'> FOUR-IN-A-ROW </span>! 
        To begin playing. Please enter your name! 
        </p>
        <input type='text' className='inputBlock' ref={nameInput}></input>
        <button className='inputBlock' onClick={setPlayerName}> Enter </button>
      </div>

      <div id='gameDiv' className='gameRender'>
        <p className='centeredText' id='welcomeText'> Welcome to the game {player.getName()}! </p>
        {board.renderDifficultySelection}
        {board.render()}
      </div>
    </div>
  );
}

export default App;
