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
    this.calculate = this.calculate.bind(this);
    this.clear = this.clear.bind(this);
  }

  clear() {
    this.setState({
      input: "0",
      answer: "0"
    });
  }

  handleChange(event) {
    var temp = this.state.input;

    if(this.state.input === "0"){
      temp = event.target.dataset.value;
    } else {
      temp = [...this.state.input, event.target.dataset.value];
    }

    if(this.state.answer !== "0") {
      var empty = event.target.dataset.value;
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

  calculate() {
    var temp1 = this.state.input.join("");
    console.log(temp1);
    temp1 = eval(temp1);

    this.setState({
      answer: temp1
    });
  }
  render() {
    return (
      <div>
        <h2>Calculator</h2>
        <table id="calcultorBody">
          <tbody>
            <tr>
              <td colSpan="4" id="text"><div>{this.state.input}</div><div>{this.state.answer}</div></td>
            </tr>
            <tr>
              <td style={{backgroundColor: 'red'}} data-value='ac' colSpan='2' onClick={this.clear}>AC</td>
              <Td value="/" func={this.handleChange} />
              <Td value="*" func={this.handleChange} />
            </tr>
            <tr>
              <Td value="7" func={this.handleChange} />
              <Td value="8" func={this.handleChange} />
              <Td value="9" func={this.handleChange} />
              <Td value="+" func={this.handleChange} />
            </tr>
            <tr>
              <Td value="4" func={this.handleChange} />
              <Td value="5" func={this.handleChange} />
              <Td value="6" func={this.handleChange} />
              <Td value="-" func={this.handleChange} />
            </tr>
            <tr>
              <Td value="1" func={this.handleChange} />
              <Td value="2" func={this.handleChange} />
              <Td value="3" func={this.handleChange} />
              <td style={{backgroundColor: 'blue'}} rowSpan="2" onClick={this.calculate}>=</td>
            </tr>
            <tr>
              <td data-value='0' colSpan='2' onClick={this.handleChange}>0</td>
              <Td value="." func={this.handleChange} />
            </tr>
          </tbody>
        </table>
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
