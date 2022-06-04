import styled from "styled-components";
import React, { Component } from "react";
import Navigation from "../components/Navigation/Navigation";
import Carousel from "../components/Carousel/Carousel";
import Card from "../components/Card/Card";

const ContainerList = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default class Category extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Carousel/>
        <ContainerList>
          <Card/>
        </ContainerList>
      </div>
    );
  }
}
