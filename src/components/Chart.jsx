import React from 'react';
import {getData} from '../functions/getData';
export default function Chart(){
const initialState = {
    chart: [],
    productsTypeOne: [],
    productsTypeTwo: [],
    productsTypeThree: [],
    total: 0.0
}
    return(
        <div>
        {getData()}
        </div>
    )
}