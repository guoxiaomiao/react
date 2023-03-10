import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


/*class Square extends React.Component {
  // //初始化state
  // constructor(props){
  //   //每次定义其子类构造函数时都需要调用super方法 so,在所有含有构造函数的react组件中，构造函数必须以super(props)开头
  //   super(props)
  //   this.state = {
  //     value : null
  //   }
  // }
  render() {
    return (
      <button 
        className="square"
        onClick={()=>{this.props.onClick()}}
        >
        {this.props.value} 
      </button>
    );
  }
}*/

function Square(props){
  return (
    <button 
      className="square"
      onClick = {props.onClick}
    >
    {props.value}
    </button>
  )

}

class Board extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     squares : Array(9).fill(null),
  //     xIsNext : true
  //   }
  // }

  handleClick(i){
    const squares = this.state.squares.slice();//创建squares副本
    if(calculateWinner(squares) || squares[i]){
      return
    }
    squares[i] = this.state.xIsNext ? 'x' : 'o'
    this.setState({
      squares : squares ,
      xIsNext : !this.state.xIsNext
    })
  }

  renderSquare(i) {
    return (<Square 
            value={this.props.squares[i]}
            onClick = {this.props.onClick(i)}
             />);
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status ;
    if(winner){
      status = 'winner:' + winner
    }else{
      status = 'Next player: '+(this.state.xIsNext ? 'x' : 'o') ;
    }

    return (
      <div>
        <div className="status">{status}</div>
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
  //初始化state
  constructor(props){
    super(props)
    this.state = {
      history :[{squares:Array(9).fill(null)}] ,
      xIsNext : true
    }
  }
  render() {
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

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Game />);

function calculateWinner(squares) {
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
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
