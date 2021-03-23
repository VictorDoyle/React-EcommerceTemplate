import React, { useEffect, useState } from 'react'
import { Image } from 'semantic-ui-react'

function ImageCircular () {
    const [imageSource, setImageSource] = useState();



    return(
        <>
         <Image src={imageSource} size='medium' circular />
        </>
    )
}

export default ImageCircular