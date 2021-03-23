import {React, useEffect, useState} from 'react'
/* styling */
import '../../styles/ShortProdBio.css'

function ShortProdBio (props){
/* keep track of current product to show */
const [productNum, setProductNum ] = useState(0)
/* show text depending on product */
const [productBio, setProductBio] = useState("")

/* setting current bio to current product */
const productBioCheck = () => {
    if (productNum === 1) {
        setProductBio("The Perfect Combination of fresh ingredients to spice up your morning")
    } else if (productNum === 2) {
        setProductBio("A Fresh punch of tangy green apple and tart blueberry to jolt your senses back to life")
    } else if (productNum === 3) {
        setProductBio("testing product 3")
    }  
    return productBio
}


/* useEffect keeping track of which product user is on */
useEffect(() => {
if (!props.currentProduct) {
    setProductNum(0)
} else setProductNum(props.currentProduct)

productBioCheck()
}, [props, productNum])



console.log(props)

    return (
        <>
      
        <h1 className="heroProductNumber"> 0{productNum}</h1>
        <h1 className="heroProductDesc"> {productBio}</h1>
        
      
      </>
    )
} 

export default ShortProdBio