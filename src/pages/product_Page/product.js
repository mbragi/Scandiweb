import { Component } from "react";
import { Headers, Inputbutton } from "../../components/StyledElements/Elements";
import Navigation from "../../components/Navigation/Navigation";
import Grey from "../../assests/Grey.png";
import product from "../../assests/product.png";
import "./product.css";

class Product extends Component {
  render() {
    return (
      <>
        <Navigation />
        <section className="product-overlay">
          <div className="left">
            {/* 3 Image options */}
            <div className="product-option">
              <div>
                <img src={product} alt="option 1" />
              </div>
              <div>
                <img src={product} alt="option 2" />
              </div>
              <div>
                <img src={product} alt="option 3" />
              </div>
            </div>
            <div className="selected-product">
              {/*selected product image component */}
              <img src={Grey} alt=""></img>
            </div>
          </div>
          <div className="right">
            <div className="inputs-Section">
              <Headers>Apollo</Headers>
              <p
                className="inputs"
                style={{
                  left: "7px",
                  top: "2rem",
                }}
              >
                Running Short
              </p>
            </div>
            <div>
              <span className="inputs-Section">
                <Headers>SIZE:</Headers>
                <div
                  className="
                  inputs"
                >
                  <Inputbutton>XS</Inputbutton>
                  <Inputbutton>S</Inputbutton>
                  <Inputbutton>M</Inputbutton>
                  <Inputbutton>L</Inputbutton>
                </div>
              </span>
              <span className="inputs-Section">
                <Headers>COLOR:</Headers>
                <div className="inputs">
                  <Inputbutton className="color-button" />
                  <Inputbutton className="color-button1" />
                  <Inputbutton className="color-button2" />
                </div>
              </span>

              <span className="inputs-Section">
                <Headers>PRICE:</Headers>
                <div
                  className="inputs"
                  style={{ top: "-0.1rem", left: "0.5rem", height: "0rem" }}
                >
                  <Headers>$50.00</Headers>
                </div>
              </span>
              <div>
                <Inputbutton
                  style={{
                    width: "60%",
                    marginLeft: "3rem",
                    backgroundColor: "#5ece7b",
                    color: "#ffff",
                    border: "none",
                  }}
                >
                  ADD TO CART
                </Inputbutton>
              </div>
              <div>
                <p style={{ width: "90%" }}>
                  Find stunning women's cocktail dresses and party dresses.
                  Stand out in lace and metallic cocktail dresses and party
                  dresses from all your favourite brands.
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Product;
