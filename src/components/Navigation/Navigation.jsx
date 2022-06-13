import React, { Component } from 'react'
import cart from '../../assests/cart.png'
import svg from '../../assests/svg.png'
import styled from 'styled-components';

const NavBar = styled.nav`
width: 100%;
background: inherit;
height: 40px;
display: flex;
`

const Ul = styled.p`
// background: red;
display:flex;
list-style: none;
flex-direction: row;
width: 13rem;
justify-content: space-between;
margin-left: 3rem;
&.active{
  background-colour:#5ece7b;
  text decoration:underline;
  cursor:pointer;
}

`
const Logo = styled.div`
display: flex;
background:#5ece7b;
width:1rem;
height:1rem;
margin-right: 9rem;
align-items:center;

`
const Dropdowns =styled.div`
display:flex;
justify-content:space-between;
align-items:center;
width:4rem;
margin-right:3.5rem;
`
export default class Navigation extends Component {
  render() {
    return (
      <NavBar>
          <section  style={{display:'flex',
            alignItems:'center',
            width:'100%',
            justifyContent:'space-between',

        }}>

{/* category list */}
          <Ul>
              <li >Women</li>
              <li>Men</li>
              <li>Kids</li>
          </Ul>

{/* App logo icon on navBar */}
          <Logo>
            <img src={svg} alt='logo'/>
          </Logo>

{/* drop down icons sections for currency change and cart  */}
          <Dropdowns>
            <div>
              <label>$
                <select name='currency' style={{border:'none',
                borderRadius:"50%",
                width:'20px'
              }}>
              <option value='USD'>$ USD</option>
              <option value='EUR'>€ EUR</option>
              <option value='JPY'>¥ JPY</option>
                </select>
              </label>
            </div>

              <img src={cart} alt= 'cart'   />
          </Dropdowns>
          
          </section>
      </NavBar>
    )}
    }