import React from 'react'
import loading from './loading.gif.gif'


const Spinner = ()=> {
    return (
        <div className="text-center">
            <img className="my-3" src={loading} alt="load" />  
        </div>
    )
}

export default Spinner
