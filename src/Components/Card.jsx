import { Button, Col, Row, Modal, Container } from 'react-bootstrap';
import React, { useState } from 'react';
import cardStyles from '../Styles/cardStyles.css';
import Modalito from './Modal'




const ProductItemCard = ({ productItems = [] }) => {

    return (

        <div className='row'>

            {

                productItems.map((item, index) => (

                    <div key={index} className='col-lg-2 col-sm-6 cajasup' >

                        <img src={item.image} className='caja1 w-100 h-100' />
                        <div className='caja2 '>
                            <div className='textDescription' >
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