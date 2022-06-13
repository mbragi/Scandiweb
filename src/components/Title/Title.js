import React, { Component } from "react";
import { SectionContainer,SectionWriteup } from "../StyledElements/Elements";

export default class Title extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionWriteup>Category name</SectionWriteup>
      </SectionContainer>
    );
  }
}
