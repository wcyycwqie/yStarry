/*
 * @Author: 
 * @Date: 2021-05-27 15:18:44
 * @LastEditors: Chaoyue
 * @LastEditTime: 2021-06-04 17:39:00
 * @FilePath: \my-app\src\pages\demo-nineChess\index.js
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   render () {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         { this.props.cellValue}
//       </button>
//     );
//   }
// }

function SquareFn (props) {
  return (
    <button className="square"
      onClick={props.onClick}
    >
      {props.cellValue}
    </button>
  )
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      dataList: Array(9).fill(null)
    }

  }

  handleCLick (i) {
    const squareList = this.state.dataList.slice()
    let count = this.state.count;
    if (squareList[i] !== null || this.caculateWinner(squareList)) {
      return
    }
    if (this.state.count % 2 === 0) {
      squareList[i] = 'X'
    } else {
      squareList[i] = 'O'
    }
    count++

    this.setState({ dataList: squareList, count: count })

  }

  renderSquare (i) {
    return (
      <SquareFn cellValue={this.state.dataList[i]} onClick={() => this.handleCLick(i)} />
    );
  }

  caculateWinner (squareList) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (squareList[a] && squareList[a] === squareList[b] && squareList[a] === squareList[c]) {
        console.log(squareList[a], 'win');
        return squareList[a]
      }
    }
    return null
  }

  render () {
    const status = 'Next player: X';
    const winner = this.caculateWinner(this.state.dataList);
    return (
      <div>
        <div className="status">{status}</div>
        <div className="status">winner:  {winner}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
