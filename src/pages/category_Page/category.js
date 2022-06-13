import React, { Component } from "react";
import Navigation from "../../components/Navigation/Navigation";
import Card from "../../components/Card/Card";
import Title from "../../components/Title/Title";
import { ContainerList } from "../../components/StyledElements/Elements";



export default class Category extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Title/>
        <ContainerList>
          <Card/>
        </ContainerList>
      </div>
    );
  }
}
