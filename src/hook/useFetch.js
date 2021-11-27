import {useEffect, useState} from "react"
const URL = 'https://my-json-server.typicode.com/norton794/desafio_m2_chart/categories/';
export const useFetch = category =>{
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        fetch(URL+category)
        .then(resp=> resp.json())
        .then(json => setState({
            data: json,
            loading: false
        }))
        
    }, [])

    return state
}
