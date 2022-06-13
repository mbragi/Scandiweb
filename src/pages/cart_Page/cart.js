import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import { SectionContainer, SectionWriteup } from "../../components/StyledElements/Elements";
import product from "../../assests/product.png";
import "./cart.css";

export default class Cart extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SectionContainer style={{ height: "5rem" }}>
          <SectionWriteup style={{ top: "2.5rem" }}>CART</SectionWriteup>
        </SectionContainer>
        <hr />
        <section className="cart-layout">
          <div className="section">
            <div className="side-A"></div>
            <div className="side-B">
              <div className="number-of-items">
                <button>+</button>
                <h4>1</h4>
                <button>-</button>
              </div>
              <div>
                <img className="selected-item" src={product} alt="cart-item" />
                <div></div>
              </div>
            </div>
          </div>
          <hr />
          <div className="section">
            <div className="side-A"></div>
            <div className="side-B">
              <div className="number-of-items">
                <button>+</button>
                <h4>1</h4>
                <button>-</button>
              </div>
              <div>
                <img className="selected-item" src={product} alt="cart-item" />
                <div></div>
              </div>
            </div>
          </div>
          <hr />
          <div className="section"></div>
        </section>
      </>
    );
  }
}
