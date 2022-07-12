import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Title from "../../components/Title/Title";
import { ContainerList } from "../../components/StyledElements/Elements";
import "./category.css";
import CardWithDataComponent from "../../utils/graphql/cardDataComponent";

export default class Category extends Component {
  render() {
    return (
      <div className="PNP">
        <Navigation />
        <Title />
        <ContainerList>
          <CardWithDataComponent />
        </ContainerList>
      </div>
    );
  }
}
