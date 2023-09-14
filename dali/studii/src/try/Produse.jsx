import React from 'react'
import {ProdusIndividual} from './ProdusIndividual'

export const Produse= ({produse, addToCart}) => {
    return produse.map((produsIndividual)=>(
        <ProdusIndividual
            key={produsIndividual.ID}
            produsIndividual={produsIndividual}
            addToCart={addToCart}
        />
    ))
}