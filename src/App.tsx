// core
import React, { useState, useEffect } from 'react';

// components
import BoardComponent from './components/BoardComponent';

// styles
import './App.css';
import { Board } from "./models/Board";


function App() {

  const [board, setBoard] = useState(new Board());

  const restart = () => {
    const newBoard = new Board();
    newBoard.initCells();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
