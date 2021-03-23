import React, { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'

function ImageCircular (props) {
    const [imageSource, setImageSource] = useState();

    /* setting image src based on product */
const currentProductImage = () => {
    if (props.currentProduct === 1) {
        setImageSource(
            "test 1"
        )
    } else if (props.currentProduct === 2) {
        setImageSource(
            "test 1"
        )
    } else if (props.currentProduct === 3) {
        setImageSource(
            "test 1"
        )
        
    }
    return props.currentProduct
}

useEffect(() => {
    currentProductImage()
}, [imageSource])


    return(
        <>
         <Image src={imageSource} size='medium' circular />
        </>
    )
}

export default ImageCircular