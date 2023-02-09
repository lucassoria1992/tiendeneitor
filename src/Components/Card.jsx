import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import React, { useState } from 'react';
import cardStyles from '../Styles/cardStyles.css';
import MydModalWithGrid from './MydModalWithGrid';
import Modal from 'react-bootstrap/Modal';




const ProductItemCard = ({ productItems = [] }) => {
    const [modalShow, setModalShow] = useState(false);

    return (

        <div className='row'>

            {productItems.map((item, index) => (

                <div key={index} className='col-lg-2 col-sm-6 cajasup' >

                    <img src={item.image} className='caja1 ' />
                    <div className='caja2 '>
                        <div className='textDescription' >
                            
                            <a  className='linkeado'  onClick={() => setModalShow(true) && MydModalWithGrid(item)}>
                                See More!
                            </a>

                            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
                        </div>
                    </div>
                    <div className="go-corner" />


                </div >


            ))}

        </div >
    )
}


export default ProductItemCard;