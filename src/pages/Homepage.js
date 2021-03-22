import {React, useState, useEffect} from 'react';
import HeroAccordion from '../components/Hero/Accordion';
import ShortProdBio from '../components/Hero/ShortProdBio';
/* styling */
import { Grid } from 'semantic-ui-react'
import '../styles/Hero.css'




function Homepage () {
const [currentProduct, setCurrentProduct] = useState();


    return (
        <>
    <Grid divided='vertically' className="heroGrid">
        <Grid.Row columns={2}>

            <Grid.Column>
                <ShortProdBio {...currentProduct} />
            </Grid.Column>

            <Grid.Column>
                <HeroAccordion {...currentProduct}/>
            </Grid.Column>

        </Grid.Row>
    </Grid>
        
       
        </>
    )
}

export default Homepage