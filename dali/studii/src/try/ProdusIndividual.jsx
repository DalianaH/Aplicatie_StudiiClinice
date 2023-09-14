import React from 'react'

export const ProdusIndividual = ({ produsIndividual, addToCart }) => {
     const handleAddToCart=()=>{
        addToCart(produsIndividual);
    }
    return (
        <div className='product'>
            <div className='product-text title'>{produsIndividual.Descriere}</div>
            <div className='product-text description'>{produsIndividual.Rezumat}</div>
        </div> 
    )
}