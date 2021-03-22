import {React, useState, useEffect} from 'react';
import HeroAccordion from './Accordion'
import ShortProdBio from './ShortProdBio'
/* styling */
import { Grid,Header, Segment, TransitionablePortal, Icon, Container } from 'semantic-ui-react'  
import '../../styles/Hero.css'
/* animations */
import { CSSTransitionGroup } from 'react-transition-group'

function Hero () {
const [currentProduct, setCurrentProduct] = useState(1);
/* animation base */
const [bgColor, setBgColor] = useState();
const [animationType, setAnimationType] = useState();
const [animationDef, setAnimationDef] = useState();

/* setting background color based on product */
const productStyleCheck = () => {
    if (currentProduct === 1) {
        setBgColor("#4272f5")
        setAnimationType(
            "expand 1.5s ease forwards"
        )
    } else if (currentProduct === 2) {
        setBgColor("#c97f4b")
        setAnimationType(
            "expand 1.5s ease forwards"
        )
    } else if (currentProduct === 3) {
        setBgColor("#65c9a6")
        setAnimationType(
            "expand 1.5s ease forwards"
        )
    } else  if (currentProduct === 4) {
        setBgColor("#cc6050")
        setAnimationType(
            "expand 1.5s ease forwards"
        )
    } else  if (currentProduct > 4) {
        return currentProduct
    }
    return currentProduct
}
/* setting Max page to show current product to 4 */
    useEffect(() => {
    if (!currentProduct) {
        setCurrentProduct(0)
    } else setCurrentProduct(currentProduct)
    if (currentProduct > 4) {
        setCurrentProduct(4)
    } 
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

        <div key={getId()} style={{backgroundColor: bgColor, animation: animationType}}>

    <Container>
        <Grid divided='vertically' className="heroGrid">
            <Grid.Row columns={2}>

                <Grid.Column>
                    <ShortProdBio currentProduct = {currentProduct} />
                </Grid.Column>

                <Grid.Column>
                    <HeroAccordion currentProduct = {currentProduct} />
                    <Icon name='long arrow alternate right' size='huge' onClick={() => {setCurrentProduct(currentProduct + 1)}}/>
                </Grid.Column>

            </Grid.Row>
        </Grid>
    </Container>
        </div>
        
       
        </div>
    )
}

export default Hero