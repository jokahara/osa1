// Tehtävät 1.6-1.9
import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0
    }
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>
        <div>
          <Button
            handleClick={ () => this.setState({ hyva: this.state.hyva + 1 }) }
            text="hyvä"
          />
          <Button
            handleClick={ () => this.setState({ neutraali: this.state.neutraali + 1 }) }
            text="neutraali"
          />
          <Button
            handleClick={ () => this.setState({ huono: this.state.huono + 1 }) }
            text="huono"
          />
        </div>
        <Statistics {...this.state}/>
      </div>
    )
  }
}

const Statistics = ({ hyva, neutraali, huono }) => {
  if (hyva + neutraali + huono === 0) {
    return <div>
      <h1>statistiikka</h1>
      ei yhtään palautetta annettu
    </div>
  }

  const keskiarvo = () => ((hyva - huono) / (hyva + neutraali + huono)).toFixed(2)

  const positiivisia = () => (100 * hyva / (hyva + neutraali + huono)).toFixed(1) + "%"

  return <div>
    <h1>statistiikka</h1>
    <Statistic
      text = "hyvä"
      value = {hyva}
    />
    <Statistic
      text = "neutraali"
      value = {neutraali}
    />
    <Statistic
      text = "huono"
      value = {huono}
    />
    <Statistic
      text = "keskiarvo"
      value = {keskiarvo()}
    />
    <Statistic
      text = "positiivisia"
      value = {positiivisia()}
    />
  </div>
}

const Statistic = ({ text, value }) => <div>{text} {value}</div>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)