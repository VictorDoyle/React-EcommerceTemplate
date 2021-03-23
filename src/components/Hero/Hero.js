import {React, useState, useEffect} from 'react';
import HeroAccordion from './Accordion'
import ShortProdBio from './ShortProdBio'
/* styling */
import { Grid, Icon, Container } from 'semantic-ui-react'  
import '../../styles/Hero.css'

function Hero () {
const [currentProduct, setCurrentProduct] = useState(1);
/* animation base */
const [animationType, setAnimationType] = useState();

/* setting background color based on product */
const productStyleCheck = () => {
    if (currentProduct === 1) {
        setAnimationType(
            "0 -100%",
        )
    } else if (currentProduct === 2) {
        setAnimationType(
            "-100% -200%",
        )
    } else if (currentProduct === 3) {
        setAnimationType(
            "-200% -300%",
        )
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

        <div key={getId()} style={{ backgroundPosition: animationType}} className="heroBoxContainer">

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