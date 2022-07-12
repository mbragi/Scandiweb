import { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import {
  SectionContainer,
  SectionWriteup,
  Headers,
  Inputbutton,
} from "../../components/StyledElements/Elements";

import "./cart.css";
import { cartDatas } from "../../utils/cartData";

export default class Cart extends Component {
  render() {
    return (
      <>
        <Navigation />
        <SectionContainer style={{ height: "5rem" }}>
          <SectionWriteup style={{ top: "2.5rem" }}>CART</SectionWriteup>
        </SectionContainer>
        <section className="cart-layout">
          {cartDatas.map((cartData) => {
            return (
              <div>
                <hr />
                <div className="section" key={cartData.id}>
                  <div className="side-A">
                    <div className="product-details">
                      <Headers className="title-header">
                        {cartData.title}
                      </Headers>
                      <p className="title-paragraph">{cartData.productTitle}</p>
                      <Headers className="product-amount">
                        {cartData.price}
                      </Headers>
                    </div>
                    <section className="size">
                      <Headers>SIZE</Headers>
                      <div className="Buttons">
                        {cartData.availableSizes.map((availableSize) => {
                          return (
                            <Inputbutton>{availableSize.size}</Inputbutton>
                          );
                        })}
                      </div>
                    </section>
                    <div className="color">
                      <Headers>COLOR</Headers>
                      <div className="Buttons">
                        <Inputbutton className="color-button" />
                        <Inputbutton className="color-button1" />
                      </div>
                    </div>
                  </div>
                  <div className="side-B">
                    <div className="number-of-items">
                      <button>+</button>
                      <h4>{cartData.quantity}</h4>
                      <button>-</button>
                    </div>
                    <div>
                      <img
                        className="selected-item"
                        src={cartData.product}
                        alt="cart-item"
                        style={{ postion: "relative" }}
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          width: "6rem",
                          // justifyContent: "space-evenly",
                          alignItems: "flex-end",
                          // position: "absolute",
                        }}
                      >
                        <img
                          src={cartData.back}
                          alt="back"
                          style={{
                            backgroundColor: "black",
                            width: "12px",
                            padding: "3px",
                          }}
                        />
                        <img
                          src={cartData.froward}
                          alt="forward"
                          style={{
                            backgroundColor: "black",
                            width: "12px",
                            padding: "3px",
                            margin: "",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <hr />
          <div className="section"></div>
        </section>
      </>
    );
  }
}
