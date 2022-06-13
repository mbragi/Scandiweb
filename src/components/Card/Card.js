import { Component } from "react";
import { cardDatas } from "../../utils/Data";
import "./Card.css";
import Vector from "../../assests/Vector.png";

class Card extends Component {
  render() {
    return (
      <>
        <section
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            padding: "1rem",
            paddingTop: "0rem",
          }}
        >
          {cardDatas.map((cardData) => (
            <div
              className="product-Card"
              style={{ margin: "1rem" }}
              key={cardData.id}
            >
              <div className="product-Card-inner">
                <div className="product-image">
                  <img src={cardData.Image} alt="product" />
                </div>
                <div className="product-details" style={{ marginTop: "1rem" }}>
                  <div className="product-Name">
                    {cardData.title}
                    <div
                      className="icon"
                      style={{ 
                        background: "#5ece7b", }}
                    >
                      <img src={Vector} alt="Cart" />
                    </div>
                  </div>
                </div>
                <h4 className="product-price">
                  {cardData.price}
                </h4>
              </div>
            </div>
          ))}
        </section>
      </>
    );
  }
}
export default Card;
