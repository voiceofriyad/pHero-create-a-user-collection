import React from 'react';

const Cart = (props) => {

    const cart = props.cart;
    
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const userSalary = cart[i];
        total = total + +userSalary.salary;
    }

    


    return (
        <div>
            <h3> Total Contacts: {cart.length}</h3>
            
            <h3> Person Salaries: {total} </h3>       
                      
        </div>
    );
};

export default Cart;