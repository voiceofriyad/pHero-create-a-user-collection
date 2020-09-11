import React from 'react';
import User from '../User/User';

const Cart = (props) => {

    const cart = props.cart;
    const salary = props.salary;


    return (
        <div>
            <h3> Total Contacts: {cart.length}</h3>
            
                <h3> Person Salaries: {salary.length}</h3>
        
            
            
        </div>
    );
};

export default Cart;