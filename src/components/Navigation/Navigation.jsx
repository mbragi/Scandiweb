import React, { Component } from 'react'
import { NavBar, Ul,Logo,Dropdowns } from '../StyledElements/Elements'
import cart from '../../assests/cart.png'
import svg from '../../assests/svg.png'


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
                <select  
                name='currency'
                style={{border:'none',
                width:'18px'
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