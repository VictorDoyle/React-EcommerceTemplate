import {React, useState} from 'react'
/* styling */
import '../../styles/ShortProdBio.css'

function ShortProdBio (){
    /* pass down props of current horizontal "page" */
const [productNum, setProductNum ] = useState("")


    return (
        <>
        <div>
        <h1 floated='left'> {productNum}</h1>
        <h1 floated='left'> PRODUCT BIO FOR NUMBER 1</h1>
        
      </div>
      </>
    )
} 

export default ShortProdBio