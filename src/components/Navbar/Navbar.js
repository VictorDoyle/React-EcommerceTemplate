import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* styling */
import { Grid, Menu } from 'semantic-ui-react'
import '../../styles/Navbar.css'
/* imports */
import Homepage from '../../pages/Homepage'
import Shop from '../../pages/Shop'
import ShoppingIcon from './ShoppingIcon'

class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <>
        
    <Grid className="navbarMain">
        <Grid.Row>
        <Grid.Column width={4}>
             
            <Link to={'/'}>
            <h1>WingMan </h1> 
            </Link>
           
            
        </Grid.Column>

        <Grid.Column width={8} className="centerColLinks" >
            <Link to={'/shop'} >
                <Menu.Item
                name='shop now'
                active={activeItem === 'shop now'}
                onClick={this.handleItemClick}
                
                />
                </Link>

                <Link to={'/stories'} className="centerColLinks">
                <Menu.Item
                name='stories'
                active={activeItem === 'stories'}
                onClick={this.handleItemClick}
                />
                </Link>

                <Link to={'/rituals'} className="centerColLinks">
                <Menu.Item
                name='daily rituals'
                active={activeItem === 'daily rituals'}
                onClick={this.handleItemClick}
                />
                </Link>

                <Link to={'/collections'} className="centerColLinks">
                <Menu.Item
                name='collections'
                active={activeItem === 'collections'}
                onClick={this.handleItemClick}
                />
                </Link>

        </Grid.Column>
        <Grid.Column width={4}>
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
        </Grid.Column>
        </Grid.Row>   
    </Grid>
      </>
    )
  }
}

export default Navbar;