// import React from "react";


// class First extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       price: 0,
//       ItemName: "",
//       quantity: 0,
//       gst: 18,
//       totalAmount: "₹0.00",
//     };
//   }

//   handleChange = (event) => {
//     const { id, value } = event.target;
//     // Parse numerical values for proper calculations
//     this.setState({
//       [id]: id === "price" || id === "quantity" || id === "gst" ? Math.max(parseFloat(value) || 0, 0) : value,
//     });
//   };

//   calculateTotal = () => {
//     const { price, quantity, gst } = this.state;
//     const total = (price * quantity * (1 + gst / 100)).toFixed(2);
//     this.setState({ totalAmount: `₹${total}` });
//   };

//   render() {
//     const { price, ItemName, quantity, gst, totalAmount } = this.state;
//     return (
//       <div>
//         <h1>GST Calculator</h1>
//         <div>
//           <label htmlFor="price">Price per Item: </label>
//           <input
//             type="number"
//             id="price"
//             value={price}
//             onChange={this.handleChange}
//             placeholder="Enter price per item"
//           />
//         </div>
//         <div>
//           <label htmlFor="ItemName">Name: </label>
//           <input
//             type="text"
//             id="ItemName"
//             value={ItemName}
//             onChange={this.handleChange}
//             placeholder="Enter item name"
//           />
//         </div>
//         <div>
//           <label htmlFor="quantity">Quantity: </label>
//           <input
//             type="number"
//             id="quantity"
//             value={quantity}
//             onChange={this.handleChange}
//             placeholder="Enter quantity"
//           />
//         </div>
//         <div>
//           <label htmlFor="gst">GST (%): </label>
//           <input
//             type="number"
//             id="gst"
//             value={gst}
//             onChange={this.handleChange}
//             placeholder="Enter GST %"
//           />
//         </div>
//         <div>
//           <label htmlFor="totalAmount">Total Amount: </label>
//           <input
//             type="text"
//             id="totalAmount"
//             value={totalAmount}
//             placeholder="Total amount will appear here"
//             readOnly
//           />
//         </div>
//         <button type="button" onClick={this.calculateTotal}>
//           Calculate
//         </button>
//       </div>
//     );
//   }
// }

// export default First;

import React from "react";
import "./First.css"; // Import external CSS for styling

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: 0,
      ItemName: "",
      quantity: 0,
      gst: 18,
      totalAmount: "₹0.00",
    };
  }

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({
      [id]: id === "price" || id === "quantity" || id === "gst" ? Math.max(parseFloat(value) || 0, 0) : value,
    });
  };

  calculateTotal = () => {
    const { price, quantity, gst } = this.state;
    const total = (price * quantity * (1 + gst / 100)).toFixed(2);
    this.setState({ totalAmount: `₹${total}` });
  };

  render() {
    const { price, ItemName, quantity, gst, totalAmount } = this.state;
    return (
      <div className="container">
        <h1 className="title">GST Calculator</h1>
        <div className="form-group">
          <label htmlFor="price">Price per Item:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={this.handleChange}
            placeholder="Enter price per item"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ItemName">Item Name:</label>
          <input
            type="text"
            id="ItemName"
            value={ItemName}
            onChange={this.handleChange}
            placeholder="Enter item name"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={this.handleChange}
            placeholder="Enter quantity"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gst">GST (%):</label>
          <input
            type="number"
            id="gst"
            value={gst}
            onChange={this.handleChange}
            placeholder="Enter GST %"
            className="input-field"
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount:</label>
          <input
            type="text"
            id="totalAmount"
            value={totalAmount}
            placeholder="Total amount will appear here"
            className="input-field"
            readOnly
          />
        </div>
        <button type="button" className="calculate-button" onClick={this.calculateTotal}>
          Calculate
        </button>
      </div>
    );
  }
}

export default First;
