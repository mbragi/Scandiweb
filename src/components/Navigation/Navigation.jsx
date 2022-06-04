import React, { Component } from 'react'
import styled from 'styled-components';

const NavBar = styled.nav`
width: 100%;
position: relative;
background: #FFFFFF;
height: 40px;
z-index:1;



`

const Ul = styled.p`
// background: red;
display:flex;
list-style: none;
flex-direction: row;
width: 13rem;
justify-content: space-between;
float: left;
    margin-left: 3rem;
    margin-top: -5;

`


export default class Navigation extends Component {
  render() {
    return (
      <NavBar>
          <section>
          <Ul>
              <li>Women</li>
              <li>Men</li>
              <li>Kids</li>
          </Ul>
          </section>
      </NavBar>
    )}
    }