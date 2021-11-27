import React, {useState, useEffect, useReducer, useContext} from 'react';
import Product from './Product';
import {useFetch} from '../hook/useFetch'
import Categories from './Categories';

export default function Chart(){

const categoryOne = useFetch(1);
const categoryTwo = useFetch(2);
const categoryThree = useFetch(3);

const [enabled, setEnabled] = useState(false);

    return(
        <div className="p-3">

        <Categories title="Internet" enabled={true} desc="Selecione um plano de Internet" category={categoryOne} />

        <Categories title="TV" enabled={enabled} desc="Escolha seu próximo televisor" category={categoryTwo} />       
        
        <Categories title="Fixo" enabled={enabled} desc="Escolha seu pacote de telefonia" category={categoryThree}/> 
         
<hr/>
<div className="m-4 p-4" style={{display: 'flex', justifyContent: 'space-between'}}>
<span className="text-purple-700  font-bold text-xl mb-2">Total: </span>

<span className="text-purple-700  font-bold text-xl mb-2">R$ 0,00 </span>
</div>


        </div>
    )
}