import React, { Component } from 'react'
import { Accordion, Icon } from 'semantic-ui-react'
import '../../styles/Accordion.css'

class HeroAccordion extends Component {
  state = { activeIndex: null }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <Accordion styled className="accordionContent">
        <Accordion.Title
          active={activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          Ingredients
          <Icon name='plus' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <p>
          Caffeine, Taurine, B-Group Vitamins and Sugars are the base components to all our Wingman Drinks. Our secret ingredient is of course, you guessed it, a magic concoctation that gives you wings!
        
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          Who Love Us Most?
          <Icon className="" name='plus' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 1}>
          <p>
          The Wingman Drink is appreciated worldwide by top athletes, busy professionals, college students and travelers on long journeys.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          Buying Options
          <Icon name='plus' />
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 2}>
          <p>
          Whether you're a busy professional, an Athlete, a Student and many more, we've got specific buying options for everyone!
          </p>
         
        </Accordion.Content>
      </Accordion>
    )
  }
}

export default HeroAccordion