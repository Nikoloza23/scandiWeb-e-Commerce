import React from 'react';
import { useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import { NavLink } from 'react-router-dom';
import { delCart } from '../redux/action/index'


const Cart = () =>{
     
    const state = useSelector((state) => state);
    const dispatch = useDispatch()
    
    const handleClose = (item) => {
        dispatch(delCart(item))
    }




    const product = (product) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={product.id}>
                <div className="container">
                    <button onClick={()=>handleClose(product)}  className="btn-close float-end" aria-label="Close"></button>
                       <div className="row justify-content-center">
                           <div className="col-md-4">
                               <img src={product.image} alt={product.title} height="200px" width="180px" />
                           </div>
                        <div className="col-md-4">
                            <h3>{product.title}</h3>
                            <p className="load fw-bold">{product.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }


  

    return (
        <>
          {state.length !== 0 && state.map(product)}

       </>
    );
}

export default Cart;