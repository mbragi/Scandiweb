import product from "../assests/product.png";
import jupyter from "../assests/jupyter.png";
import back from "../assests/back.png";
import froward from "../assests/froward.png";

export const cartDatas = [
  {
    id: 1,
    product: product,
    title: "Apollo",
    productTitle: "Running Short",
    price: "$50.00",
    availableSizes: [
      { size: "XS" },
      { size: "S" },
      { size: "M" },
      { size: "L" },
    ],
    quantity: 1,
    back: back,
    froward: froward,
  },
  {
    id: 2,
    product: jupyter,
    title: "Jupiter",
    productTitle: "Wayfarer",
    price: "$75.00",
    availableSizes: [{ size: "XS" }, { size: "S" }],
    quantity: 2,
    back: back,
    froward: froward,
  },
];
