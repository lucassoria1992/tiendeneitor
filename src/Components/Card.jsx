import React from 'react';
import cardStyles from '../Styles/cardStyles.css';
import Modalito from './Modal'

const ProductItemCard = ({ productItems = [] }) => {

    return (

        <div className='row d-flex justify-content-center col-12 '>

            {

                productItems.map((item, index) => (

                    <div key={index} className='col-lg-4 col-sm-4 cajasup' >

                        <img src={item.image} className='caja1' />
                        <div className='caja2 '>
                            <div className='textDescription justify-content-center' >
                               <Modalito items = {item} />
                            </div>
                        </div>
                        <div className="go-corner" />


                    </div >


                ))}

        </div >
    )
}




export default ProductItemCard;