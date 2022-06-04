import React, { Component } from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
  background-repeat: no-repeat;
  background-size: cover;
  height: 14rem;
  padding: 0;
`;
const SectionWriteup = styled.h2`
  padding: 0;
  // color: #ffffff;
  position: absolute;
  //width: 0rem;
  //height: 364px;
  left: 3rem;
  top: 5rem;

  //font-family: 'DM Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 2rem;
  line-height: 30px;
  color: #1d1f22;
`;
export default class Carousel extends Component {
  render() {
    return (
      <SectionContainer>
        <SectionWriteup>Category name</SectionWriteup>
      </SectionContainer>
    );
  }
}
