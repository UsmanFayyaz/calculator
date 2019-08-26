import React from 'react';
import './App.css';
import Td from './components/Td';

class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "0",
      answer: "0"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({
      input: "0",
      answer: "0"
    });
  }

  handleChange(data) {
    var temp = this.state.input;

    if (this.state.input === "0") {
      temp = data;
    } else {
      temp = [...this.state.input, data];
    }

    if (this.state.answer !== "0") {
      var empty = data;
      this.setState({
        input: empty,
        answer: "0"
      });
    } else {
      this.setState({
        input: temp
      });
    }
  }

  handleClick(event) {
    this.handleChange(event.target.dataset.value);

  }

  handleButton(event) {
    if (event.key === "Enter" || event.key === "=") {
      this.calculate();
    } else if ((event.keyCode >= 48 && event.keyCode <= 57) || (event.keyCode >= 42 && event.keyCode <= 47)) {
      this.handleChange(event.key);
    }
  }

  calculate() {
    var temp1 = this.state.input.join("");
    var error = false;

    try {
      temp1 = eval(temp1);
    } catch (e) {
      if (e instanceof SyntaxError) {
        alert("Syntax Error");
        this.clear();
        error = true;
      }
    }

    if (!error) {
      this.setState({
        answer: temp1
      });
    }
  }
  render() {
    onkeypress = this.handleButton;
    return (
      <div>
        <div>
          <h2>Calculator</h2>
          <table id="calcultorBody">
            <tbody>
              <tr>
                <td colSpan="4" id="text"><div>{this.state.input}</div><div>{this.state.answer}</div></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: 'red' }} data-value='ac' colSpan='2' onClick={this.clear}>AC</td>
                <Td value="/" func={this.handleClick} />
                <Td value="*" func={this.handleClick} />
              </tr>
              <tr>
                <Td value="7" func={this.handleClick} />
                <Td value="8" func={this.handleClick} />
                <Td value="9" func={this.handleClick} />
                <Td value="+" func={this.handleClick} />
              </tr>
              <tr>
                <Td value="4" func={this.handleClick} />
                <Td value="5" func={this.handleClick} />
                <Td value="6" func={this.handleClick} />
                <Td value="-" func={this.handleClick} />
              </tr>
              <tr>
                <Td value="1" func={this.handleClick} />
                <Td value="2" func={this.handleClick} />
                <Td value="3" func={this.handleClick} />
                <td style={{ backgroundColor: 'blue' }} rowSpan="2" onClick={this.calculate}>=</td>
              </tr>
              <tr>
                <td data-value='0' colSpan='2' onClick={this.handleChange}>0</td>
                <Td value="." func={this.handleClick} />
              </tr>
            </tbody>
          </table>
        </div>
        <div id="author">
          <p>Designed and Coded by</p> <br />
          <a href="https://github.com/UsmanFayyaz/calculator">Usman Fayyaz</a>
        </div>
      </div>
    );
  }
};

function App() {
  return (
    <div className="App">
      <Presentational />
    </div>
  );
}

export default App;
