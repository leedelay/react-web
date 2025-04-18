import '/styles/styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// https://react.dev/learn/tutorial-tic-tac-toe#overview
// https://zh-hant.legacy.reactjs.org/tutorial/tutorial.html#picking-a-key

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function Square({value, onSquareClick}){
  // console.log("render Square()"); // 觀察更新時機
  return (<button className="square" onClick={onSquareClick}>{value}</button>);
}

function Board({xIsNext, squares, onPlay}){
  // console.log("render Board()"); // 觀察更新時機
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i){
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // setSquares(nextSquares);
    // setXIsNext(!xIsNext);
    onPlay(nextSquares);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game(){
  // console.log("render Game()"); // 觀察更新時機
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  // const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares) {
    // Here, [...history, nextSquares] creates a new array that contains all the items in history, 
    // followed by nextSquares. (You can read the ...history spread syntax as “enumerate all the items in history”.)
    // For example, if history is [[null,null,null], ["X",null,null]] and nextSquares is ["X",null,"O"], 
    // then the new [...history, nextSquares] array will be [[null,null,null], ["X",null,null], ["X",null,"O"]].
    // [...history, nextSquares] -> 建立一個「新的陣列」，裡面包含 history 中的所有元素，然後在最後再加上 nextSquares。
    // [...arr] -> 建立一個「新的陣列」，裡面包含 arr 中的所有元素
    // [...arr, newArrObj] -> 建立一個「新的陣列」，裡面包含 arr 中的所有元素，然後在最後再加上 newArrObj
    // setHistory([...history, nextSquares]); 
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    // setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  // [1, 2, 3].map((x) => x * 2) 結果是 [2, 4, 6] // 把 [1, 2, 3] 裡的每個元素都乘以 2, 然後組成一個新陣列 [2, 4, 6]
  // .map() 是什麼？ .map() 是一個用在陣列上的方法，它會：
  // 1. 針對陣列的每一個元素
  // 2. 執行你提供的函式
  // 3. 把每次的結果收集起來，變成一個"新的陣列"
  // ex: 
  // const arr = [1, 2, 3];
  // const newArr = arr.map((x) => x * 2);
  // console.log(arr);     // [1, 2, 3]   原本的沒變
  // console.log(newArr);  // [2, 4, 6]   新的結果
  // sample : 
  // array.map((element, index, array) => {
  //   // 你要對每一個 element 做的事
  // })
  // 三個參數分別是：
  // 參數名	意義	範例值
  // element	當前處理的陣列元素	比如 1、"a"、物件等
  // index	該元素在陣列中的索引（位置）	0、1、2...
  // array	原始的陣列（完整陣列）	[1, 2, 3]（整包陣列）
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    // 建議建立動態列表時一律指定適當的 key
    // <li> 若不指定key, 則會自動指定索引值為key並提示警告
    // 建議自行指定key, 如 <li key={move}> 
    return (
      <li key={move}> 
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div>
      <div>
        <div>
          <Link to="/">回首頁</Link>
        </div>
        <div>
          <a href="https://react.dev/learn/tutorial-tic-tac-toe" target="tutorial-tic-tac-toe">
            tutorial
          </a>
        </div>
        <div>
          <a href="https://zh-hant.legacy.reactjs.org/tutorial/tutorial.html" target="tutorial-tic-tac-toe2">
            tutorial中文(較舊)
          </a>
        </div>
      </div>
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

// export default Game;

// export default function Square() {
//   return <button className="square">X</button>;
// }
