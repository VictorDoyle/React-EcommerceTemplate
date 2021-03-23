import React, { useEffect, useState } from 'react'
/* styling */
import '../../styles/WingmanDrink.css'
import { Image } from 'semantic-ui-react'  
/* image imports */
import blueRedBull from '../../media/blueRedBull.png'
import lightRedBull from '../../media/lightRedBull.png'


function WingmanDrink (props) {
    const [productImage, setproductImage] = useState();
console.log(props)
    const showProductCheck = () => {
        if (props.currentProduct === 1) {
            setproductImage(
                blueRedBull
            )
        } else if (props.currentProduct === 2) {
            setproductImage(
                "cola redbull"
            )
        } else if (props.currentProduct === 3) {
            setproductImage(
                lightRedBull
            )
            
        }
        return props.currentProduct
    }

    useEffect(() => {
    showProductCheck()
    }, [])




    return(
    <>
    <div className="showProductContainer">

    <Image className="productImage" src={productImage}></Image>
    </div>

    </>
    )
}

export default WingmanDrink