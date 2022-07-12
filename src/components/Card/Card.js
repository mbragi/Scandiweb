import React, { Component } from "react";
import "./Card.css";
import Vector from "../../assests/Vector.png";

class Card extends Component {
  render() {
    return (
      <section
      >
        <div
          className="product-Card"
          style={{ margin: "1rem" }}
          id={this.props.id}
        >
          <div className="product-Card-inner">
            <div className="product-image">
              <img src={this.props.gallery} alt="product" />
            </div>
            <div className="product-details" style={{ marginTop: "1rem" }}>
              <div className="product-Name">
                {this.props.name}
                <div
                  className="icon"
                >
                  <img src={Vector} alt="Cart" />
                </div>
              </div>
            </div>
            <h4 className="product-price">
              {this.props.price}
            </h4>
          </div>
        </div>
      </section>
    );
  }
}
export default Card;
