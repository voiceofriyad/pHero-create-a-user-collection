import React, { useEffect, useState } from 'react';
import user from '../../Data/data.json';
import  './Collection.css';
import User from '../User/User';
import Cart from '../Cart/Cart';

const Collection = () => {

    const [data, setData] = useState([]);
    useEffect ( () => {
        setData(user);
    } , [])

    const [cart, SetCart] = useState([]);

    const handleAddUser = (user) =>{
        const newCart = [...cart, user];
        SetCart(newCart);
    }

    const [userSalary, setUserSalary] = useState([])

   
    return (
        <div className = "collection-container">

            <div className="user-container">
                {
                    data.map(value => <User 
                    handleAddUser = {handleAddUser}
                    user = {value}>

                    </User> )
                   
                }

            </div>

            <div className="cart-container">
                <Cart cart = {cart} ></Cart>

            </div>
            
        </div>
    );
};

export default Collection;