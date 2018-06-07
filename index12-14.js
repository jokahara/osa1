// Tehtävät 1.12-1.14
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }
  }

  next = (lenght) => {
    return () => {
        let n = this.state.selected
        do {
          n = Math.round(lenght * Math.random())
        } while (n === this.state.selected)

        this.setState({selected: n})
      }
  }

  vote = () => {
    return () => {
      const kopio = [...this.state.pisteet]
      kopio[this.state.selected] += 1
  
      this.setState({pisteet: kopio})
    }
  }
  
  suosituin = () => {
    let index = 0
    for (let i = 1; i < this.state.pisteet.length; i++) {
      if (this.state.pisteet[i] > this.state.pisteet[index]) {
        index = i
      }
    }
    return index
  }

  render() {
    return (
      <div>
        <div> {this.props.anecdotes[this.state.selected]} </div>
        <div> has {this.state.pisteet[this.state.selected]} votes </div>

        <Button handleClick = {this.vote()}
        text = "vote"
        />
        <Button handleClick = {this.next(5)}
        text = "next anectode"
        />

        <h1> anectode with most votes: </h1>
        <div> {this.props.anecdotes[this.suosituin()]} </div>
        <div> has {this.state.pisteet[this.suosituin()]} votes </div>

      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)