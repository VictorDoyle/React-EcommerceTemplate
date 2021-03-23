import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Icon } from 'semantic-ui-react'
import '../../styles/MainContent.css'
import ImageCircular from './ImageCircular'
function MainContent() {
    return (
        <>
       <Card className="mainContentDescription">
            <Card.Content>
            <Card.Header className="mainContentHeader">Our Ingredients Are</Card.Header>
            <ImageCircular />
            <Card.Meta>
                <span className='date'>Joined in 2015</span>
            </Card.Meta>
            <Card.Description>
                Matthew is a musician living in Nashville.
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
        <Link to={'/shop'}>
                <Icon name='heart' />
                Looking To Purchase This Drink? Look No Further! We've got Plenty for You under the "Shop" Section
                
        </Link>
           
            </Card.Content>
        </Card>
        </>
    )
}

export default MainContent

