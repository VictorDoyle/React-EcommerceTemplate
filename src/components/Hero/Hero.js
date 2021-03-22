import {React, useState, useEffect} from 'react';
import HeroAccordion from './Accordion'
import ShortProdBio from './ShortProdBio'
/* styling */
import { Grid, Icon, Container } from 'semantic-ui-react'  
import '../../styles/Hero.css'

function Hero () {
const [currentProduct, setCurrentProduct] = useState(1);
/* animation base */
const [bgColor, setBgColor] = useState();
const [animationType, setAnimationType] = useState();

/* setting background color based on product */
const productStyleCheck = () => {
    if (currentProduct === 1) {
        setBgColor("#4272f5")
        setAnimationType(
            "expand 1.5s ease forwards",
            /* FIXME: add color change to be consistent with expand Fx */
            "colorChange 1.5s ease infinite"
        )
    } else if (currentProduct === 2) {
        setBgColor("#c97f4b")
    } else if (currentProduct === 3) {
        setBgColor("#65c9a6")
    } else  if (currentProduct === 4) {
        setBgColor("#cc6050")
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
    /* useEffect to set Global doc background color */
    useEffect(() => {
        document.body.style.backgroundColor = bgColor 
        
      
    }, [bgColor])
  

    return (
        <div>

        <div key={getId()} style={{ animation: animationType}}>

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