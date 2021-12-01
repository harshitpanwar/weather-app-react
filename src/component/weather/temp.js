import React from 'react'
import "./style.css"

const Temp = () => {
    return (
        <>
            <div className="wrap">
                <div className="search">
                    <input type = "search"
                    placeholder = "search..."
                    autoFocus
                    id="search"
                    className="searchTerm"
                    ></input>




                </div>
            </div>
        </>
    )
}

export default Temp
