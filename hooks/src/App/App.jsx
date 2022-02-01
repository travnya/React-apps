import React, { useEffect, useState, useCallback, useMemo } from 'react';
import './App.css'

const App = () => {
    const [value, setValue] = useState(1)
    const [visible, setVisible] = useState(true)

    if(visible) {
        return(
            <div>
                <button
                    onClick={() => setValue((v) => v + 1)}
                    className='btn btn-dark'>+</button>
                <button 
                    onClick={() => setVisible(false)}
                    className='btn btn-dark'>Hide</button>
                <PlanetInfo id = {value}/>
            </div>
        )
    } else {
        return <button onClick={() => setVisible(true)} className='btn btn-dark' >Show</button>
    }
}

const getPlanet = (id) => {
    return fetch(`https://swapi.dev/api/planets/${id}`)
    .then(res => res.json())
    .then(data => data)  
}

const useRequest = (request) => {

    const defState = useMemo(() => ({
        data: null,
        loading: true,
        error: null
    }), [])

    const [ dataState, setDataState ] = useState(defState)

    useEffect(() => {
        setDataState(defState)
        request()
        .then(data => setDataState({
            data, 
            loading: false,
            error: null
        }))
        .catch(error => setDataState({
            data: null,
            loading: false,
            error
        }))   
    }, [request, defState])

    return dataState;
}

const usePlanetInfo = (id) => {
     const request = useCallback(() => getPlanet(id), [ id ])
     return useRequest(request)
}

const PlanetInfo = ( {id} ) => {

    const { data, loading, error } = usePlanetInfo(id)

    if(error) {
        return <div>Something is wrong</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }
    
    return (
        <div>
            {id} - { data && data.name }
        </div>
    )
}
export default App