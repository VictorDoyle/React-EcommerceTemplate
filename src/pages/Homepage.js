import {React, useState, useEffect} from 'react';
import HeroAccordion from '../components/Hero/Accordion'
import ShortProdBio from '../components/Hero/ShortProdBio'
/* styling */
import { Grid, Icon, Container } from 'semantic-ui-react'  
import '../styles/Homepage.css'
import WingmanDrink from '../components/Product/WingmanDrink';
import MainContent from '../components/MainContent/MainContent';

function Homepage () {
const [currentProduct, setCurrentProduct] = useState(1);
/* animation base */
const [slidePosition, setslidePosition] = useState();
const [backgroundColor, setBackgroundColor ] = useState();
const [contentAnimation, setContentAnimation ] = useState();
/* setting background color based on product */

const productStyleCheck = () => {
    if (currentProduct === 1) {
        setslidePosition(
            "0 100%",
        )
        setBackgroundColor(
            "linear-gradient(to right , #4272f5 50%, #c97f4b 50%)"
        )
        setContentAnimation(
            "expand 1.5s ease "
        )
    } else if (currentProduct === 2) {
        setslidePosition(
            "100% 200%",
        )
    } else if (currentProduct === 3) {
        setslidePosition(
            "200% 300%",
        )
        setBackgroundColor(
            "linear-gradient(to right , #65c9a6 50%, #c97f4b 50%)"
        )
        
    }
    return currentProduct
}




/* setting Max page to show current product to 4 */
    useEffect(() => {
    if (currentProduct > 3) {
        setCurrentProduct(3)
    } else if (currentProduct < 1) {
        setCurrentProduct(1)
    }
    /* FIXME: keep for now but refactor in version 1.0 */
  
    productStyleCheck()
    }, [currentProduct])

/* remounting animation on click via unique key */
    const getId = () => {
        const id = currentProduct
        console.log(id);
        return id;
    };

    return (
    <div>

        {/* hero content */}
        <div key={getId()} style={{ backgroundPosition: slidePosition, backgroundImage: backgroundColor}} className="heroBoxContainer">

        <Grid divided='vertically' className="heroGrid" style={{ animation: contentAnimation}}>
            <Grid.Row columns={3} >

                <Grid.Column  width={5}>
                    <ShortProdBio currentProduct = {currentProduct} />
                </Grid.Column>

                <Grid.Column  width={6}>
                    <WingmanDrink currentProduct = {currentProduct} />
                    <Container  textAlign="center">
                    <Icon name='long arrow alternate left' size='huge' onClick={() => {setCurrentProduct(currentProduct - 1)}}/>
                    <Icon name='long arrow alternate right' size='huge' onClick={() => {setCurrentProduct(currentProduct + 1)}}/>

                    </Container>
                </Grid.Column>

                <Grid.Column  width={5}>
                    <HeroAccordion currentProduct = {currentProduct} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
  
    
        </div>
        
        {/* main content */}

        <MainContent currentProduct = {currentProduct} />
       
    </div>
    )
}

export default Homepage