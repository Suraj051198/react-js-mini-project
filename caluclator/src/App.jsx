import React, { Component } from 'react';
import './Suraj.css';  // Importing the CSS file

class Suraj extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstValue: 0,
      secondValue: 0,
      total: 0,
    };
  }

  handleInputChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: parseFloat(value) || 0 });
  };

  add = () => {
    const { firstValue, secondValue } = this.state;
    this.setState({ total: firstValue + secondValue });
  };

  multiply = () => {
    const { firstValue, secondValue } = this.state;
    this.setState({ total: firstValue * secondValue });
  };

  subtract = () => {
    const { firstValue, secondValue } = this.state;
    this.setState({ total: firstValue - secondValue });
  };

  divide = () => {
    const { firstValue, secondValue } = this.state;
    if (secondValue !== 0) {
      this.setState({ total: firstValue / secondValue });
    } else {
      alert('Cannot divide by zero');
    }
  };

  render() {
    const { firstValue, secondValue, total } = this.state;

    return (
      <div className="calculator-container">
        <h1 className="calculator-title">Calculator</h1>
        <div>
          <label htmlFor="firstValue">Enter 1st Value: </label>
          <input
            type="number"
            id="firstValue"
            value={firstValue}
            onChange={this.handleInputChange}
            placeholder="Enter first value"
            className="calculator-input"
          />
        </div>
        <div>
          <label htmlFor="secondValue">Enter 2nd Value: </label>
          <input
            type="number"
            id="secondValue"
            value={secondValue}
            onChange={this.handleInputChange}
            placeholder="Enter second value"
            className="calculator-input"
          />
        </div>
        <div>
          <label htmlFor="total">Total: </label>
          <input
            type="number"
            id="total"
            value={total}
            placeholder="Result will appear here"
            readOnly
            className={`calculator-input ${total !== 0 ? 'calculator-input-readonly' : ''}`}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={this.add}
            className="calculator-button"
          >
            Add
          </button>
          <button
            type="button"
            onClick={this.multiply}
            className="calculator-button"
          >
            Multiply
          </button>
          <button
            type="button"
            onClick={this.subtract}
            className="calculator-button"
          >
            Subtract
          </button>
          <button
            type="button"
            onClick={this.divide}
            className="calculator-button"
          >
            Divide
          </button>
        </div>
      </div>
    );
  }
}

export default Suraj;
