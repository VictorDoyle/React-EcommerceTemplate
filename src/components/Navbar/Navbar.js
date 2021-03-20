import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'
import Homepage from '../../pages/Homepage'
import Shop from '../../pages/Shop'
import ShoppingIcon from './ShoppingIcon'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
          
        <Link to={'/'}>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
          to={Homepage}
        />
        </Link>

        <Link to={'/shop'}>
        <Menu.Item
          name='shop'
          active={activeItem === 'shop'}
          onClick={this.handleItemClick}
          
        />
        </Link>

        <Link to={'/collections'}>
        <Menu.Item
          name='collections'
          active={activeItem === 'collections'}
          onClick={this.handleItemClick}
        />
        </Link>
        <Menu.Menu position='right'>

        <Link to={'/account'}>
        <Menu.Item
          name='account'
          active={activeItem === 'account'}
          onClick={this.handleItemClick}
        />
        </Link>

        <Link to={'/cart'}>
        <ShoppingIcon
        name='shopping_cart'
        active={activeItem === 'shopping_cart'}
        onClick={this.handleItemClick}
        />
        </Link>
          
        </Menu.Menu>
      </Menu>
    )
  }
}

export default Navbar;