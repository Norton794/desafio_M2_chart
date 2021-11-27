import React, {useState, useEffect, useReducer} from 'react';
import Product from './Product';
import {useFetch} from '../hook/useFetch'
import Categories from './Categories';

export default function Chart(){

const categoryOne = useFetch(1);
const categoryTwo = useFetch(2);
const categoryThree = useFetch(3);
   

    return(
        <div className="p-3">

        <Categories title="Internet" desc="Selecione um plano de Internet" category={categoryOne} />

        <Categories title="TV" desc="Escolha seu próximo televisor" category={categoryTwo} />       
        
        <Categories title="Fixo" desc="Escolha seu pacote de telefonia" category={categoryThree}/> 
         
<hr/>
<p>Total: </p>

        </div>
    )
}